import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AnswerState, Exercise } from "../types";
import { stringFormatter } from "../utils";

// Types for enhanced exercise state
type ExerciseWithState = Exercise & {
  answerState?: AnswerState;
  userSelectedAnswers?: string[];
  correctSelections?: string[];
  wrongSelections?: string[];
};

// Pure validation functions
function validateFillInAnswer(userAnswer: string, correctAnswer: string | number): AnswerState {
  const normalizedUser = stringFormatter(userAnswer);
  const normalizedCorrect = stringFormatter(correctAnswer);
  return normalizedUser === normalizedCorrect ? "success" : "error";
}

function validateSelectAnswer(userAnswer: string, correctAnswer: string): AnswerState {
  return userAnswer === correctAnswer ? "success" : "error";
}

function validateMultiSelectAnswer(
  userAnswers: string[],
  correctAnswers: string[]
): { state: AnswerState; correctSelections?: string[]; wrongSelections?: string[] } {
  if (userAnswers.length === 0) {
    return { state: undefined };
  }

  const correctSelections = correctAnswers.filter(answer => userAnswers.includes(answer));
  const wrongSelections = userAnswers.filter(answer => !correctAnswers.includes(answer));

  if (correctSelections.length === correctAnswers.length && wrongSelections.length === 0) {
    return { state: "success" };
  }

  if (correctSelections.length > 0) {
    return {
      state: "partial_success",
      correctSelections,
      wrongSelections
    };
  }

  return { state: "error" };
}

interface State {
  exercises: ExerciseWithState[];
  currentExercise: number;
  setExercises: (exs: Exercise[]) => void;
  toggleAnswer: (exerciseId: string, answerId: string) => void;
  next: () => void;
  previous: () => void;
  reset: () => void;
  resetLevel: () => void;
  setCurrentExercise: (index: number) => void;
}

export const useExerciseStore = create(
  persist<State>(
    (set, get) => ({
      exercises: [],
      currentExercise: 0,
      setExercises: (exs) => set({ exercises: exs }),
      next: () => {
        const { currentExercise, exercises } = get();
        const nextExercise = currentExercise + 1;

        if (nextExercise < exercises.length) {
          set({ currentExercise: nextExercise });
        }
      },

      previous: () => {
        const { currentExercise } = get();
        const previousExercise = currentExercise - 1;

        if (previousExercise >= 0) {
          set({ currentExercise: previousExercise });
        }
      },

      reset: () => {
        set({ exercises: [] });
        set({ currentExercise: 0 });
      },

      resetLevel: () => {
        const { exercises } = get();
        const newExercises = structuredClone(exercises);

        newExercises.forEach((exercise) => {
          exercise.answerState = undefined;
          exercise.userSelectedAnswers = [];
          exercise.correctSelections = [];
          exercise.wrongSelections = [];
        });

        set({ exercises: newExercises });
        set({ currentExercise: 0 });
      },

      setCurrentExercise: (index: number) => {
        const { exercises } = get();
        if (index >= 0 && index < exercises.length) {
          set({ currentExercise: index });
        }
      },

      toggleAnswer: (exerciseId: string, answerId: string) => {
        const { exercises } = get();
        const newExercises = structuredClone(exercises);
        const exerciseIndex = newExercises.findIndex(
          (ex) => ex.id === exerciseId,
        );

        if (exerciseIndex === -1) return;

        const exercise = newExercises[exerciseIndex];

        // Update user selected answers
        if (!exercise.userSelectedAnswers) {
          exercise.userSelectedAnswers = [];
        }

        const answerIndex = exercise.userSelectedAnswers.findIndex(
          (ans) => ans === answerId,
        );

        if (answerIndex !== -1) {
          exercise.userSelectedAnswers.splice(answerIndex, 1);
        } else {
          // For single-select types, replace the answer; for multi-select, add it
          if (exercise.type === "select" || exercise.type === "fill-in") {
            exercise.userSelectedAnswers = [answerId];
          } else {
            exercise.userSelectedAnswers.push(answerId);
          }
        }

        // Validate answer based on exercise type
        if (exercise.userSelectedAnswers.length === 0) {
          exercise.answerState = undefined;
          exercise.correctSelections = [];
          exercise.wrongSelections = [];
        } else if (exercise.type === "fill-in") {
          exercise.answerState = validateFillInAnswer(
            exercise.userSelectedAnswers[0],
            exercise.correctAnswer as string | number
          );
        } else if (exercise.type === "select") {
          exercise.answerState = validateSelectAnswer(
            exercise.userSelectedAnswers[0],
            exercise.correctAnswer as string
          );
        } else if (exercise.type === "select-multiple") {
          const validation = validateMultiSelectAnswer(
            exercise.userSelectedAnswers,
            exercise.correctAnswer as string[]
          );
          exercise.answerState = validation.state;
          exercise.correctSelections = validation.correctSelections || [];
          exercise.wrongSelections = validation.wrongSelections || [];
        }

        set({ exercises: newExercises });
      },
    }),
    {
      name: "exercise-store",
    },
  ),
);
