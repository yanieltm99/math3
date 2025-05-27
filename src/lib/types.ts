import type { ReactNode } from "react";

export interface Topic {
  name: string;
  slug: string;
  description: string;
  icon: ReactNode;
  colorClass?: string;
  levels: Level[];
}

export interface Level {
  name: string;
  slug: string;
  description: string;
  difficulty: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: "select" | "select-multiple" | "true-o-false" | "fill-in" | "ordering";
  question: string;
  options?: ExerciseOptions[];
  correctAnswer: string | string[] | number;
  incorrectAnswerFeedback?: string;
  correctAnswerFeedback?: string;
  imageUrl?: string;
}

export interface ExerciseOptions {
  id: string;
  value: string | number;
}

export type AnswereState = "success" | "partial_success" | "error" | undefined;
