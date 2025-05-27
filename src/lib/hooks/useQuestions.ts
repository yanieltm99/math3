import { useExerciseStore } from "../stores/questions";

export const useQuestionsData = () => {
  const questions = useExerciseStore((state) => state.exercises);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { answereState } = question;
    if (answereState === undefined) {
      unanswered++;
    } else if (answereState === "success") {
      correct++;
    } else {
      incorrect++;
    }
  });

  return { correct, incorrect, unanswered };
};
