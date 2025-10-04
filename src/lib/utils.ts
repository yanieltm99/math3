import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stringFormatter = (text: string | string[] | number) => {
  return text.toString().replaceAll(" ", "").toLowerCase().trim();
};
