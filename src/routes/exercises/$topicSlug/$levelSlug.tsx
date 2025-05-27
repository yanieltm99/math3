import { ExerciseAlert } from "@/components/ExerciseAlert";
import LevelResults from "@/components/LevelResult";
import { LevelStatus } from "@/components/LevelStatus";
import PageWrapper from "@/components/PageWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuestionsData } from "@/lib/hooks/useQuestions";
import { getExercises } from "@/lib/math.data";
import { useExerciseStore } from "@/lib/stores/questions";
import { cn } from "@/lib/utils";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  DoorOpen,
  Drum,
  RefreshCwIcon,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import errorSound from "@/assets/sounds/error.mp3";
import successSound from "@/assets/sounds/success.mp3";
import resultSound from "@/assets/sounds/result-sound.mp3";

import useSound from "use-sound";

export const Route = createFileRoute("/exercises/$topicSlug/$levelSlug")({
  loader: async ({ params: { topicSlug, levelSlug } }) =>
    getExercises(topicSlug, levelSlug),
  component: LevelComponent,
});

function LevelComponent() {
  // 1) loader data
  const loadedExercises = Route.useLoaderData();

  // 2) zustand selectors (siempre en el mismo orden)
  const setExercises = useExerciseStore((s) => s.setExercises);
  const exercises = useExerciseStore((s) => s.exercises);
  const currentExerciseIndex = useExerciseStore((s) => s.currentExercise);
  const toogleAnswer = useExerciseStore((s) => s.toogleAnswer);
  const nextQuestion = useExerciseStore((s) => s.next);
  const previous = useExerciseStore((s) => s.previous);
  const reset = useExerciseStore((s) => s.reset);
  const resetExcerciseLevel = useExerciseStore((s) => s.resetLevel);

  // 3) efecto para poblar el store al cargar
  useEffect(() => {
    setExercises(loadedExercises);
  }, [loadedExercises, setExercises]);

  // 4) estado local para el input "fill-in", siempre inicializado (sin condicionales)
  const [fillInInputState, setFillInInputState] = useState("");
  const { correct, incorrect, unanswered } = useQuestionsData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [playSuccess] = useSound(successSound);
  const [playError] = useSound(errorSound);
  const [playResult] = useSound(resultSound);

  // 5) Reset del input cada vez que cambie de ejercicio
  const exercise = exercises[currentExerciseIndex];

  const [celebratedIds, setCelebratedIds] = useState<string[]>([]);
  const [errorIds, setErrorIds] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (exercise?.type === "fill-in") {
      const firstAnswer = exercise.userSelectedAnswers?.[0]?.toString() || "";
      setFillInInputState(firstAnswer);
    } else {
      setFillInInputState("");
    }
  }, [exercise]);

  useEffect(() => {
    if (exercise?.answereState === "success") {
      if (!celebratedIds.includes(exercise.id)) {
        showConfetti();
        playSuccess();
        setCelebratedIds((prev) => [...prev, exercise.id]);
      }
    }

    if (exercise?.answereState === "error") {
      if (!errorIds.includes(exercise.id)) {
        playError();
        setErrorIds((prev) => [...prev, exercise.id]);
      }
    }
  }, [exercise?.answereState]);

  // 6) Mientras no haya ejercicios, mostramos “loading”
  if (exercises.length === 0) {
    return (
      <PageWrapper scrollable>
        <p>Cargando ejercicios…</p>
      </PageWrapper>
    );
  }

  // 7) manejadores
  const handleAnswer = (value?: string) => {
    if (!value) return;
    if (exercise.type === "select") {
      toogleAnswer(exercise.id, value);
    }
  };

  const handleSubmitAnswer = () => {
    if (exercise.type === "fill-in" && fillInInputState.trim()) {
      toogleAnswer(exercise.id, fillInInputState.trim());
    }
  };

  const showConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
    });
  };

  const goBack = () => {
    reset();
    router.navigate({ to: ".." });
  };

  const resetLevel = () => {
    resetExcerciseLevel();
    setCelebratedIds([]);
    setErrorIds([]);
    setIsDialogOpen(false);
  };

  const next = () => {
    if (currentExerciseIndex !== exercises.length - 1) {
      nextQuestion();
    } else {
      setIsDialogOpen(true);
      playResult();
    }
  };

  // 8) render principal
  return (
    <PageWrapper scrollable={true}>
      <Card className="mb-6">
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">
                Ejercicio {currentExerciseIndex + 1}
              </h2>
              <p className="text-sm text-muted-foreground ">
                {currentExerciseIndex + 1} de {exercises.length}
              </p>
            </div>
            <LevelStatus
              correct={correct}
              incorrect={incorrect}
              unanswered={unanswered}
            />
            <div
              onClick={goBack}
              className={`absolute md:hidden top-0 right-0 p-2 ${cn(
                buttonVariants({
                  variant: "destructive",
                  size: "icon",
                }),
              )})`}
            >
              <XCircle className="h-10 w-10" />
            </div>
            <Button
              variant="destructive"
              onClick={goBack}
              className="hidden md:flex"
            >
              <DoorOpen />
              Salir
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl">{exercise.question}</CardTitle>
        </CardHeader>
        <CardContent className="min-h-60">
          {/* Select single */}
          {exercise.type === "select" && (
            <RadioGroup
              value={exercise.userSelectedAnswers?.toString() || ""}
              onValueChange={handleAnswer}
              disabled={exercise.answereState !== undefined}
              className="space-y-3"
            >
              {exercise.options?.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 rounded-lg border p-4 transition-colors"
                >
                  <RadioGroupItem value={option.id} id={`option-${idx}`} />
                  <Label
                    htmlFor={`option-${idx}`}
                    className="flex-grow cursor-pointer"
                  >
                    {option.value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* Select multiple */}

          {/* Fill-in */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {exercise.type === "fill-in" && (
              <Input
                type="text"
                value={fillInInputState}
                onChange={(e) => setFillInInputState(e.target.value)}
                disabled={exercise.answereState !== undefined}
              />
            )}

            {exercise.type === "fill-in" && (
              <Button
                size="lg"
                onClick={handleSubmitAnswer}
                disabled={exercise.answereState !== undefined}
              >
                <CheckIcon />
                Revisar
              </Button>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="neutral"
              size="lg"
              onClick={previous}
              className="w-full md:w-auto"
              disabled={currentExerciseIndex === 0}
            >
              <ArrowLeftIcon /> Ir Atras
            </Button>
            <Button size="lg" className="w-full md:w-auto" onClick={next}>
              <ArrowRightIcon />
              {currentExerciseIndex !== exercises.length - 1
                ? "Siguiente"
                : "Finalizar"}
            </Button>
          </div>
        </CardFooter>
      </Card>
      <ExerciseAlert
        answereState={exercise.answereState}
        correctAnswerFeedback={exercise.correctAnswerFeedback}
        incorrectAnswerFeedback={exercise.incorrectAnswerFeedback}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Drum className="h-6 w-6 text-yellow-500" /> Resultados
            </DialogTitle>
          </DialogHeader>
          <LevelResults
            totalQuestions={exercises.length}
            correctAnswers={correct}
            incorrectAnswers={incorrect}
          />
          <DialogFooter className="mt-3 ">
            <div className="flex justify-center gap-4">
              <Button variant="neutral" size="sm" onClick={resetLevel}>
                <RefreshCwIcon h-6 w-6 /> Reiniciar
              </Button>
              <Button variant="destructive" size="sm" onClick={goBack}>
                <DoorOpen h-6 w-6 /> Salir
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
}
