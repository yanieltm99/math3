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
import { getExercises } from "@/lib/data/selectors";
import { useExerciseStore } from "@/lib/stores/questions";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
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
import { useAudioFeedback } from "@/lib/hooks/useAudioFeedback";
import { useExerciseNavigation } from "@/lib/hooks/useExerciseNavigation";
import { showConfetti } from "@/lib/utils/confetti";

export const Route = createFileRoute("/exercises/$topicSlug/$levelSlug")({
  loader: async ({ params: { topicSlug, levelSlug } }) =>
    getExercises(topicSlug, levelSlug),
  component: LevelPage,
});

function LevelPage() {
  const loadedExercises = Route.useLoaderData();

  // Zustand store selectors
  const setExercises = useExerciseStore((s) => s.setExercises);
  const exercises = useExerciseStore((s) => s.exercises);
  const currentExerciseIndex = useExerciseStore((s) => s.currentExercise);
  const toggleAnswer = useExerciseStore((s) => s.toggleAnswer);
  const previous = useExerciseStore((s) => s.previous);

  // Load exercises into store on mount
  useEffect(() => {
    setExercises(loadedExercises);
  }, [loadedExercises, setExercises]);

  // Local state
  const [fillInInputState, setFillInInputState] = useState("");
  const { correct, incorrect, unanswered } = useQuestionsData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { playSuccess, playError, playResult } = useAudioFeedback();
  const navigation = useExerciseNavigation();
  
  // Current exercise and celebration tracking
  const exercise = exercises[currentExerciseIndex];
  const [celebratedIds, setCelebratedIds] = useState<string[]>([]);
  const [errorIds, setErrorIds] = useState<string[]>([]);

  const handleShowConfetti = async () => {
    await showConfetti();
  };

  // Reset input when exercise changes
  useEffect(() => {
    if (exercise?.type === "fill-in") {
      const firstAnswer = exercise.userSelectedAnswers?.[0]?.toString() || "";
      setFillInInputState(firstAnswer);
    } else {
      setFillInInputState("");
    }
  }, [exercise?.id, exercise?.type]);

  // Handle audio feedback and visual effects based on answer state
  useEffect(() => {
    if (!exercise) return;
    
    if (exercise.answerState === "success") {
      if (!celebratedIds.includes(exercise.id)) {
        handleShowConfetti();
        playSuccess();
        setCelebratedIds((prev) => [...prev, exercise.id]);
      }
    }

    if (exercise.answerState === "error") {
      if (!errorIds.includes(exercise.id)) {
        playError();
        setErrorIds((prev) => [...prev, exercise.id]);
      }
    }
  }, [exercise?.answerState, exercise?.id, celebratedIds, errorIds, playSuccess, playError, handleShowConfetti]);

  if (exercises.length === 0) {
    return (
      <PageWrapper scrollable>
        <p>Cargando ejercicios…</p>
      </PageWrapper>
    );
  }

  // Event handlers
  const handleAnswer = (value?: string) => {
    if (!value) return;
    if (exercise.type === "select") {
      toggleAnswer(exercise.id, value);
    }
  };

  const handleSubmitAnswer = () => {
    if (exercise.type === "fill-in" && fillInInputState.trim()) {
      toggleAnswer(exercise.id, fillInInputState.trim());
    }
  };


  const handleResetLevel = () => {
    navigation.resetLevel();
    setCelebratedIds([]);
    setErrorIds([]);
    setIsDialogOpen(false);
  };

  const handleNext = () => {
    navigation.next(() => {
      setIsDialogOpen(true);
      playResult();
    });
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
              onClick={navigation.goBack}
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
              onClick={navigation.goBack}
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
              disabled={exercise.answerState !== undefined}
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
                disabled={exercise.answerState !== undefined}
              />
            )}
            {exercise.type === "fill-in" && (
              <Button
                size="lg"
                onClick={handleSubmitAnswer}
                disabled={exercise.answerState !== undefined}
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
              <ArrowLeftIcon /> Ir atrás
            </Button>
            <Button size="lg" className="w-full md:w-auto" onClick={handleNext}>
              <ArrowRightIcon />
              {currentExerciseIndex !== exercises.length - 1
                ? "Siguiente"
                : "Finalizar"}
            </Button>
          </div>
        </CardFooter>
      </Card>
      <ExerciseAlert
        answerState={exercise.answerState}
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
              <Button variant="neutral" size="sm" onClick={handleResetLevel}>
                <RefreshCwIcon className="h-6 w-6" /> Reiniciar
              </Button>
              <Button variant="destructive" size="sm" onClick={navigation.goBack}>
                <DoorOpen className="h-6 w-6" /> Salir
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
}
