import { useExerciseStore } from "../stores/questions";

export const useQuestionsData = () => {
  const questions = useExerciseStore((state) => state.exercises);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { answerState } = question;
    if (answerState === undefined) {
      unanswered++;
    } else if (answerState === "success") {
      correct++;
    } else {
      incorrect++;
    }
  });

  return { correct, incorrect, unanswered };
};
