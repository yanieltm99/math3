import type { Level } from "../../types";

export const divisionLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "División exacta con divisores de una cifra.",
    difficulty: 1,
    exercises: [
      { id: "division-1-1", type: "fill-in", question: "¿Cuánto es 6 ÷ 2?", correctAnswer: 3, incorrectAnswerFeedback: "Piensa: ¿en cuántos grupos de 2 cabe el 6?" },
      { id: "division-1-2", type: "select", question: "¿Cuánto es 9 ÷ 3?", options: [ { id: "1", value: 2 }, { id: "2", value: 3 }, { id: "3", value: 4 } ], correctAnswer: "2", incorrectAnswerFeedback: "9 dividido en grupos de 3 es 3 grupos." },
      { id: "division-1-3", type: "fill-in", question: "¿Cuánto es 8 ÷ 4?", correctAnswer: 2, incorrectAnswerFeedback: "8 dividido en 4 partes iguales da 2 en cada parte." },
      { id: "division-1-4", type: "select", question: "¿Cuánto es 5 ÷ 1?", options: [ { id: "1", value: 5 }, { id: "2", value: 1 }, { id: "3", value: 0 } ], correctAnswer: "1", incorrectAnswerFeedback: "Todo número dividido por 1 es el mismo número." },
      { id: "division-1-5", type: "fill-in", question: "¿Cuánto es 4 ÷ 2?", correctAnswer: 2, incorrectAnswerFeedback: "Divide 4 en dos grupos iguales." },
      { id: "division-1-6", type: "fill-in", question: "¿Cuánto es 10 ÷ 5?", correctAnswer: 2, incorrectAnswerFeedback: "¿Cuántos 5 caben en 10?" },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "División con divisor de una cifra y contexto práctico.",
    difficulty: 2,
    exercises: [
      { id: "division-2-1", type: "fill-in", question: "Tienes 12 galletas y las repartes entre 4 amigos. ¿Cuántas recibe cada uno?", correctAnswer: 3, incorrectAnswerFeedback: "Divide 12 galletas en 4 partes iguales." },
      { id: "division-2-2", type: "select", question: "¿Cuánto es 14 ÷ 7?", options: [ { id: "1", value: 2 }, { id: "2", value: 1 }, { id: "3", value: 7 } ], correctAnswer: "1", incorrectAnswerFeedback: "14 dividido en grupos de 7 da 2 grupos, ¡ojo!" },
      { id: "division-2-3", type: "fill-in", question: "¿Cuánto es 15 ÷ 3?", correctAnswer: 5, incorrectAnswerFeedback: "3 cabe 5 veces en 15." },
      { id: "division-2-4", type: "select", question: "Si tienes 18 lápices y los metes en cajas de 6, ¿cuántas cajas completas llenas?", options: [ { id: "1", value: 2 }, { id: "2", value: 3 }, { id: "3", value: 4 } ], correctAnswer: "2", incorrectAnswerFeedback: "18 ÷ 6 = 3 cajas, ¡revisa las cifras!" },
      { id: "division-2-5", type: "fill-in", question: "¿Cuánto es 20 ÷ 4?", correctAnswer: 5, incorrectAnswerFeedback: "Divide 20 en 4 grupos iguales." },
      { id: "division-2-6", type: "fill-in", question: "Reparte 24 monedas en 8 amigos. ¿Cuántas monedas recibe cada uno?", correctAnswer: 3, incorrectAnswerFeedback: "24 ÷ 8 = 3." },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description: "División con divisor de dos cifras y resto.",
    difficulty: 3,
    exercises: [
      { id: "division-3-1", type: "fill-in", question: "¿Cuánto es 56 ÷ 7?", correctAnswer: 8, incorrectAnswerFeedback: "7 × 8 = 56." },
      { id: "division-3-2", type: "fill-in", question: "¿Cuánto es 45 ÷ 12? (escribe solo la parte entera)", correctAnswer: 3, incorrectAnswerFeedback: "12 × 3 = 36; 12 × 4 = 48 (>45)." },
      { id: "division-3-3", type: "select", question: "¿Cuánto es 84 ÷ 14?", options: [ { id: "1", value: 6 }, { id: "2", value: 7 }, { id: "3", value: 8 } ], correctAnswer: "2", incorrectAnswerFeedback: "14 × 6 = 84." },
      { id: "division-3-4", type: "fill-in", question: "Reparte 100 caramelos en grupos de 15. ¿Cuántos grupos completos?", correctAnswer: 6, incorrectAnswerFeedback: "15 × 6 = 90; 15 × 7 = 105 (>100)." },
      { id: "division-3-5", type: "fill-in", question: "¿Cuánto es 72 ÷ 8?", correctAnswer: 9, incorrectAnswerFeedback: "8 × 9 = 72." },
      { id: "division-3-6", type: "select", question: "¿Cuánto es 99 ÷ 11?", options: [ { id: "1", value: 8 }, { id: "2", value: 9 }, { id: "3", value: 10 } ], correctAnswer: "2", incorrectAnswerFeedback: "11 × 9 = 99." },
    ],
  },
];
