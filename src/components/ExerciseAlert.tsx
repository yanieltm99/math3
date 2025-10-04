import type { AnswerState } from "@/lib/types";
import { Alert, AlertTitle } from "./ui/alert";
import { AlertCircleIcon, Bug, CheckCircle2Icon } from "lucide-react";
import { memo } from "react";

interface ExerciseAlertProps {
  answerState: AnswerState;
  correctAnswerFeedback?: string;
  incorrectAnswerFeedback?: string;
}

export const ExerciseAlert = memo<ExerciseAlertProps>(({
  answerState,
  correctAnswerFeedback,
  incorrectAnswerFeedback,
}) => {
  return (
    <>
      {answerState === "success" && (
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{correctAnswerFeedback ?? "Correcto!!"}</AlertTitle>
        </Alert>
      )}

      {answerState === "error" && (
        <Alert variant="destructiveWarning">
          <Bug />
          <AlertTitle>{incorrectAnswerFeedback ?? "Incorrecto!"}</AlertTitle>
        </Alert>
      )}

      {answerState === "partial_success" && (
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>{"Hay algún error en su respuesta!"}</AlertTitle>
        </Alert>
      )}
    </>
  );
});

ExerciseAlert.displayName = "ExerciseAlert";
