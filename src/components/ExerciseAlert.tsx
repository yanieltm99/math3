import type { AnswereState } from "@/lib/types";
import { Alert, AlertTitle } from "./ui/alert";
import { AlertCircleIcon, Bug, CheckCircle2Icon } from "lucide-react";

interface ExerciseAlertProps {
  answereState: AnswereState;
  correctAnswerFeedback?: string;
  incorrectAnswerFeedback?: string;
}

export const ExerciseAlert = ({
  answereState,
  correctAnswerFeedback,
  incorrectAnswerFeedback,
}: ExerciseAlertProps) => {
  return (
    <>
      {answereState === "success" && (
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{correctAnswerFeedback ?? "Correcto!!"}</AlertTitle>
        </Alert>
      )}

      {answereState === "error" && (
        <Alert variant="descructive1">
          <Bug />
          <AlertTitle>{incorrectAnswerFeedback ?? "Incorrecto!"}</AlertTitle>
        </Alert>
      )}

      {answereState === "partial_success" && (
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>{"Hay algún error en su respuesta!"}</AlertTitle>
        </Alert>
      )}
    </>
  );
};
