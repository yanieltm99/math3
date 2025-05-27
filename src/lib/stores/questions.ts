import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AnswereState, Exercise } from "../types";
import { stringFormater } from "../utils";

interface State {
  exercises: (Exercise & {
    answereState?: AnswereState;
    userSelectedAnswers?: string[];
    correctSeleccions?: string[];
    badSellection?: string[];
  })[];
  currentExercise: number;
  setExercises: (exs: Exercise[]) => void;
  toogleAnswer: (exerciseId: string, answerId: string) => void;
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
          exercise.answereState = undefined;
          exercise.userSelectedAnswers = [];
          exercise.correctSeleccions = [];
          exercise.badSellection = [];
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

      toogleAnswer: (exerciseId: string, answerId: string) => {
        const { exercises } = get();
        const newExercises = structuredClone(exercises);
        const exerciseIndex = newExercises.findIndex(
          (ex) => ex.id === exerciseId,
        );

        const excerciseInfo = newExercises[exerciseIndex];

        if (excerciseInfo.userSelectedAnswers) {
          const answerIndex = excerciseInfo.userSelectedAnswers.findIndex(
            (ans) => ans === answerId,
          );
          if (answerIndex !== -1) {
            excerciseInfo.userSelectedAnswers.splice(answerIndex, 1);
          } else {
            excerciseInfo.userSelectedAnswers.push(answerId);
          }
        } else {
          excerciseInfo.userSelectedAnswers = [answerId];
        }

        const userSelectedAnswers = stringFormater(
          excerciseInfo.userSelectedAnswers[0],
        );
        const correctAnswer = stringFormater(excerciseInfo.correctAnswer);

        // verify answer state

        if (excerciseInfo.type === "fill-in") {
          if (userSelectedAnswers === correctAnswer) {
            excerciseInfo.answereState = "success";
          }

          if (userSelectedAnswers !== correctAnswer) {
            excerciseInfo.answereState = "error";
          }
        }

        if (excerciseInfo.type === "select") {
          if (
            excerciseInfo.userSelectedAnswers[0] === excerciseInfo.correctAnswer
          ) {
            excerciseInfo.answereState = "success";
          }

          if (
            excerciseInfo.userSelectedAnswers[0] !== excerciseInfo.correctAnswer
          ) {
            excerciseInfo.answereState = "error";
          }
        }

        if (excerciseInfo.type === "select-multiple") {
          const correctAnswers = excerciseInfo.correctAnswer as string[];
          const userAnswers = excerciseInfo.userSelectedAnswers as string[];

          if (correctAnswers.length === userAnswers.length) {
            const isAllCorrect = correctAnswers.every((answer) =>
              userAnswers.includes(answer),
            );

            if (isAllCorrect) {
              excerciseInfo.answereState = "success";
            } else {
              // get correct selections
              const correctSeleccions = correctAnswers.filter((answer) =>
                userAnswers.includes(answer),
              );

              const badSellection = userAnswers.filter(
                (answerId) => !correctAnswers.includes(answerId),
              );

              if (correctSeleccions.length > 0) {
                excerciseInfo.answereState = "partial_success";
                excerciseInfo.correctSeleccions = correctSeleccions;
                excerciseInfo.badSellection = badSellection;
              }

              if (correctSeleccions.length === 0) {
                excerciseInfo.answereState = "error";
              }

              excerciseInfo.answereState = undefined;
            }
          }
        }

        if (excerciseInfo.userSelectedAnswers.length === 0) {
          excerciseInfo.answereState = undefined;
        }

        newExercises[exerciseIndex] = excerciseInfo;

        set({ exercises: newExercises });
      },
    }),
    {
      name: "exercise-store",
    },
  ),
);
