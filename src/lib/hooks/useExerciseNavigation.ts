import { useCallback } from "react";
import { useRouter } from "@tanstack/react-router";
import { useExerciseStore } from "@/lib/stores/questions";

/**
 * Hook for managing exercise navigation and level controls
 * Provides optimized navigation functions with proper state management
 */
export function useExerciseNavigation() {
  const router = useRouter();
  const reset = useExerciseStore((s) => s.reset);
  const resetLevel = useExerciseStore((s) => s.resetLevel);
  const nextQuestion = useExerciseStore((s) => s.next);
  const currentExerciseIndex = useExerciseStore((s) => s.currentExercise);
  const exercisesLength = useExerciseStore((s) => s.exercises.length);

  const goBack = useCallback(() => {
    reset();
    router.navigate({ to: ".." });
  }, [reset, router]);

  const resetExerciseLevel = useCallback(() => {
    resetLevel();
  }, [resetLevel]);

  const next = useCallback((onComplete?: () => void) => {
    if (currentExerciseIndex !== exercisesLength - 1) {
      nextQuestion();
    } else {
      onComplete?.();
    }
  }, [currentExerciseIndex, exercisesLength, nextQuestion]);

  return {
    goBack,
    resetLevel: resetExerciseLevel,
    next,
    isLastExercise: currentExerciseIndex === exercisesLength - 1,
    currentIndex: currentExerciseIndex,
    totalExercises: exercisesLength,
  };
}
