import type { Exercise, Topic } from "../types";
import { topics } from "./topics";

export function getTopics(): Topic[] {
  return topics;
}

export function getTopic(topicSlug: string): Topic | undefined {
  return topics.find((t) => t.slug === topicSlug);
}

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getExercises(topicSlug: string, levelSlug: string): Exercise[] {
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!topic) return [];
  const level = topic.levels.find((l) => l.slug === levelSlug);
  if (!level) return [];
  return shuffleArray(level.exercises);
}
