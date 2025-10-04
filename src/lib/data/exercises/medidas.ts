import type { Level } from "../../types";

export const medidasLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "Unidades básicas: cm, m, g, kg, ml, l.",
    difficulty: 1,
    exercises: [
      { id: "medidas-1-1", type: "fill-in", question: "¿Cuántos centímetros hay en 1 metro?", correctAnswer: 100, incorrectAnswerFeedback: "1 m = 100 cm." },
      { id: "medidas-1-2", type: "select", question: "¿Cuántos mililitros hay en 1 litro?", options: [ { id: "1", value: 500 }, { id: "2", value: 1000 }, { id: "3", value: 1500 } ], correctAnswer: "2", incorrectAnswerFeedback: "1 L = 1000 mL." },
      { id: "medidas-1-3", type: "fill-in", question: "¿Cuántos gramos hay en 1 kilogramo?", correctAnswer: 1000, incorrectAnswerFeedback: "1 kg = 1000 g." },
      { id: "medidas-1-4", type: "fill-in", question: "¿Cuántos segundos hay en 1 minuto?", correctAnswer: 60, incorrectAnswerFeedback: "1 min = 60 s." },
      { id: "medidas-1-5", type: "select", question: "¿Cuántos minutos hay en 1 hora?", options: [ { id: "1", value: 30 }, { id: "2", value: 60 }, { id: "3", value: 120 } ], correctAnswer: "2", incorrectAnswerFeedback: "1 h = 60 min." },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "Conversiones entre unidades: cm↔m, g↔kg, ml↔l.",
    difficulty: 2,
    exercises: [
      { id: "medidas-2-1", type: "fill-in", question: "Convierte 250 cm a metros.", correctAnswer: 2.5, incorrectAnswerFeedback: "100 cm = 1 m, por tanto 250 cm = 2.5 m." },
      { id: "medidas-2-2", type: "fill-in", question: "Convierte 3.2 m a centímetros.", correctAnswer: 320, incorrectAnswerFeedback: "1 m = 100 cm, 3.2×100 = 320 cm." },
      { id: "medidas-2-3", type: "select", question: "¿Cuántos kilogramos son 1500 gramos?", options: [ { id: "1", value: 0.5 }, { id: "2", value: 1.5 }, { id: "3", value: 1 } ], correctAnswer: "3", incorrectAnswerFeedback: "1000 g = 1 kg, 1500 g = 1.5 kg." },
      { id: "medidas-2-4", type: "fill-in", question: "Convierte 2.75 L a mililitros.", correctAnswer: 2750, incorrectAnswerFeedback: "1 L = 1000 mL, 2.75×1000 = 2750 mL." },
      { id: "medidas-2-5", type: "fill-in", question: "¿Cuántos gramos hay en 0.2 kg?", correctAnswer: 200, incorrectAnswerFeedback: "0.2×1000 = 200 g." },
      { id: "medidas-2-6", type: "select", question: "¿Cuántos litros son 5000 mL?", options: [ { id: "1", value: 0.5 }, { id: "2", value: 5 }, { id: "3", value: 50 } ], correctAnswer: "1", incorrectAnswerFeedback: "1000 mL = 1 L, 5000 mL = 5 L." },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description: "Operaciones con unidades: sumas y restas de medidas.",
    difficulty: 3,
    exercises: [
      { id: "medidas-3-1", type: "fill-in", question: "¿Cuántos centímetros hay en 1.5 m + 75 cm?", correctAnswer: 225, incorrectAnswerFeedback: "1.5 m = 150 cm, +75 = 225 cm." },
      { id: "medidas-3-2", type: "fill-in", question: "Resta 3 L - 750 mL.", correctAnswer: 2.25, incorrectAnswerFeedback: "3 L = 3000 mL, -750 = 2250 mL = 2.25 L." },
      { id: "medidas-3-3", type: "select", question: "Suma 500 g + 0.75 kg.", options: [ { id: "1", value: 1.25 }, { id: "2", value: 1.15 }, { id: "3", value: 1 } ], correctAnswer: "1", incorrectAnswerFeedback: "0.75 kg = 750 g, +500 = 1250 g = 1.25 kg." },
      { id: "medidas-3-4", type: "fill-in", question: "Convierte y suma 2 m + 150 cm.", correctAnswer: 350, incorrectAnswerFeedback: "2 m = 200 cm, +150 = 350 cm." },
      { id: "medidas-3-5", type: "fill-in", question: "Resta 5 km - 1200 m (en metros).", correctAnswer: 3800, incorrectAnswerFeedback: "5 km = 5000 m, -1200 = 3800 m." },
      { id: "medidas-3-6", type: "select", question: "¿Qué resultado tienes al sumar 1.2 kg + 300 g?", options: [ { id: "1", value: 1.5 }, { id: "2", value: 1.2 }, { id: "3", value: 1.8 } ], correctAnswer: "1", incorrectAnswerFeedback: "1.2 kg = 1200 g +300 = 1500 g = 1.5 kg." },
    ],
  },
];
