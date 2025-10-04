import type { Level } from "../../types";

export const geometriaLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "Identificación de figuras geométricas básicas.",
    difficulty: 1,
    exercises: [
      { id: "geo-1-1", type: "select", question: "¿Cuál de estas figuras tiene 3 lados?", options: [ { id: "1", value: "Cuadrado" }, { id: "2", value: "Triángulo" }, { id: "3", value: "Círculo" } ], correctAnswer: "2", incorrectAnswerFeedback: "El triángulo tiene 3 lados." },
      { id: "geo-1-2", type: "fill-in", question: "¿Cuántos lados tiene un cuadrado?", correctAnswer: 4, incorrectAnswerFeedback: "El cuadrado tiene 4 lados iguales." },
      { id: "geo-1-3", type: "select", question: "¿Qué figura no tiene lados?", options: [ { id: "1", value: "Círculo" }, { id: "2", value: "Rectángulo" }, { id: "3", value: "Pentágono" } ], correctAnswer: "1", incorrectAnswerFeedback: "El círculo es redondo y no tiene lados." },
      { id: "geo-1-4", type: "fill-in", question: "¿Cuántos lados tiene un hexágono?", correctAnswer: 6, incorrectAnswerFeedback: "Hexa significa seis." },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "Perímetro de figuras planas regulares.",
    difficulty: 2,
    exercises: [
      { id: "geo-2-1", type: "fill-in", question: "¿Cuál es el perímetro de un cuadrado de lado 5 cm?", correctAnswer: 20, incorrectAnswerFeedback: "Perímetro del cuadrado = lado × 4." },
      { id: "geo-2-2", type: "fill-in", question: "¿Cuál es el perímetro de un triángulo con lados 3 cm, 4 cm y 5 cm?", correctAnswer: 12, incorrectAnswerFeedback: "Suma los tres lados: 3 + 4 + 5." },
      { id: "geo-2-3", type: "select", question: "Un rectángulo tiene lados de 6 cm y 2 cm. ¿Cuál es su perímetro?", options: [ { id: "1", value: 8 }, { id: "2", value: 12 }, { id: "3", value: 16 } ], correctAnswer: "3", incorrectAnswerFeedback: "Perímetro = (6 + 2) × 2." },
      { id: "geo-2-4", type: "fill-in", question: "¿Cuál es el perímetro de un pentágono regular de lado 4 cm?", correctAnswer: 20, incorrectAnswerFeedback: "Perímetro = número de lados × longitud del lado." },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description: "Área de figuras planas: cuadrado, rectángulo y triángulo.",
    difficulty: 3,
    exercises: [
      { id: "geo-3-1", type: "fill-in", question: "¿Cuál es el área de un cuadrado de lado 6 cm?", correctAnswer: 36, incorrectAnswerFeedback: "Área del cuadrado = lado × lado." },
      { id: "geo-3-2", type: "fill-in", question: "¿Cuál es el área de un rectángulo de 8 cm por 3 cm?", correctAnswer: 24, incorrectAnswerFeedback: "Área = base × altura." },
      { id: "geo-3-3", type: "fill-in", question: "¿Cuál es el área de un triángulo de base 10 cm y altura 4 cm?", correctAnswer: 20, incorrectAnswerFeedback: "Área del triángulo = (base × altura) ÷ 2." },
      { id: "geo-3-4", type: "select", question: "Un rectángulo de 5 cm × 2 cm tiene área de:", options: [ { id: "1", value: 7 }, { id: "2", value: 10 }, { id: "3", value: 12 } ], correctAnswer: "2", incorrectAnswerFeedback: "5 × 2 = 10." },
    ],
  },
];
