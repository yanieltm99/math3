import type { Level } from "../../types";

export const multiplicacionLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "Multiplicación básica de números pequeños.",
    difficulty: 1,
    exercises: [
      { id: "multiplicacion-1-1", type: "fill-in", question: "¿Cuánto es 2 × 3?", correctAnswer: 6, incorrectAnswerFeedback: "Recuerda que multiplicar es como sumar 2 tres veces: 2 + 2 + 2." },
      { id: "multiplicacion-1-2", type: "select", question: "¿Cuánto es 4 × 5?", options: [ { id: "1", value: 20 }, { id: "2", value: 25 }, { id: "3", value: 15 } ], correctAnswer: "1", incorrectAnswerFeedback: "Piensa en cuántos son 4 veces 5 o 5 veces 4." },
      { id: "multiplicacion-1-3", type: "fill-in", question: "¿Cuánto es 3 × 6?", correctAnswer: 18, incorrectAnswerFeedback: "Recuerda: 3 + 3 + 3 + 3 + 3 + 3 = 18." },
      { id: "multiplicacion-1-4", type: "fill-in", question: "¿Cuánto es 5 × 2?", correctAnswer: 10, incorrectAnswerFeedback: "Multiplica 5 por 2 o suma 5 + 5." },
      { id: "multiplicacion-1-5", type: "select", question: "¿Cuánto es 1 × 9?", options: [ { id: "1", value: 9 }, { id: "2", value: 0 }, { id: "3", value: 1 } ], correctAnswer: "1", incorrectAnswerFeedback: "Multiplicar por 1 da el mismo número." },
      { id: "multiplicacion-1-6", type: "fill-in", question: "¿Cuánto es 7 × 0?", correctAnswer: 0, incorrectAnswerFeedback: "Todo número multiplicado por 0 da como resultado 0." },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "Multiplicación de números de dos cifras.",
    difficulty: 2,
    exercises: [
      { id: "multiplicacion-2-1", type: "fill-in", question: "¿Cuánto es 12 × 3?", correctAnswer: 36, incorrectAnswerFeedback: "Multiplica 10 × 3 y luego 2 × 3. Suma ambos." },
      { id: "multiplicacion-2-2", type: "select", question: "¿Cuánto es 15 × 2?", options: [ { id: "1", value: 30 }, { id: "2", value: 25 }, { id: "3", value: 20 } ], correctAnswer: "1", incorrectAnswerFeedback: "Multiplica 10 × 2 y 5 × 2. Suma ambos." },
      { id: "multiplicacion-2-3", type: "fill-in", question: "¿Cuánto es 9 × 6?", correctAnswer: 54, incorrectAnswerFeedback: "Piensa en la tabla del 9: 9, 18, 27, 36, 45, 54." },
      { id: "multiplicacion-2-4", type: "select", question: "¿Cuánto es 7 × 8?", options: [ { id: "1", value: 54 }, { id: "2", value: 56 }, { id: "3", value: 58 } ], correctAnswer: "2", incorrectAnswerFeedback: "Revisa la tabla del 7 o del 8." },
      { id: "multiplicacion-2-5", type: "fill-in", question: "¿Cuánto es 11 × 11?", correctAnswer: 121, incorrectAnswerFeedback: "Recuerda que 11 × 11 = 121." },
      { id: "multiplicacion-2-6", type: "fill-in", question: "Si compras 4 cajas con 9 lápices cada una, ¿cuántos lápices tienes en total?", correctAnswer: 36, incorrectAnswerFeedback: "Multiplica 4 por 9 para saber cuántos lápices tienes." },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description: "Multiplicación con números grandes y problemas de contexto.",
    difficulty: 3,
    exercises: [
      { id: "multiplicacion-3-1", type: "fill-in", question: "¿Cuánto es 23 × 4?", correctAnswer: 92, incorrectAnswerFeedback: "Descompón el 23 en 20 y 3. Luego multiplica y suma: (20 × 4) + (3 × 4)." },
      { id: "multiplicacion-3-2", type: "select", question: "¿Cuánto es 16 × 12?", options: [ { id: "1", value: 192 }, { id: "2", value: 196 }, { id: "3", value: 186 } ], correctAnswer: "1", incorrectAnswerFeedback: "Verifica haciendo la multiplicación paso a paso." },
      { id: "multiplicacion-3-3", type: "fill-in", question: "Una caja tiene 25 paquetes y cada paquete tiene 8 galletas. ¿Cuántas galletas hay en total?", correctAnswer: 200, incorrectAnswerFeedback: "Multiplica 25 por 8 para saber cuántas galletas hay en total." },
      { id: "multiplicacion-3-4", type: "select", question: "¿Cuál es el resultado de 45 × 7?", options: [ { id: "1", value: 305 }, { id: "2", value: 315 }, { id: "3", value: 325 } ], correctAnswer: "2", incorrectAnswerFeedback: "Puedes descomponer 45 en 40 y 5 para facilitar el cálculo." },
      { id: "multiplicacion-3-5", type: "fill-in", question: "Una fábrica produce 125 botellas al día. ¿Cuántas botellas produce en 6 días?", correctAnswer: 750, incorrectAnswerFeedback: "Multiplica 125 por 6 para saber la producción total." },
      { id: "multiplicacion-3-6", type: "fill-in", question: "¿Cuánto es 100 × 13?", correctAnswer: 1300, incorrectAnswerFeedback: "Multiplica como si fuera 13 y añade dos ceros al final." },
    ],
  },
];
