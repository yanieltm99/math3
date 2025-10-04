import type { Level } from "../../types";

export const sumasRestasLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "Operaciones básicas de suma y resta",
    difficulty: 1,
    exercises: [
      {
        id: "sumas-y-restas-1-1",
        type: "fill-in",
        question: "¿Cuánto es 7 + 5?",
        correctAnswer: 12,
        incorrectAnswerFeedback:
          "Revisa la suma: suma primero las unidades y luego las decenas.",
      },
      {
        id: "sumas-y-restas-1-2",
        type: "select",
        question: "¿Cuánto es 3 + 8?",
        options: [
          { id: "1", value: 10 },
          { id: "2", value: 11 },
          { id: "3", value: 12 },
        ],
        correctAnswer: "2",
        incorrectAnswerFeedback:
          "Intenta sumar 3 más 8 contando de uno en uno.",
      },
      {
        id: "sumas-y-restas-1-3",
        type: "fill-in",
        question: "¿Cuánto es 15 - 7?",
        correctAnswer: 8,
        incorrectAnswerFeedback:
          "Prueba restar: quita primero 5 para llegar a 10 y luego los 2 restantes.",
      },
      {
        id: "sumas-y-restas-1-4",
        type: "fill-in",
        question: "¿Cuál es la suma de 9 y 6?",
        correctAnswer: 15,
        incorrectAnswerFeedback:
          "Cuenta los dedos: suma 9 y luego 6 más uno a uno.",
      },
      {
        id: "sumas-y-restas-1-5",
        type: "select",
        question: "¿Cuánto es 10 - 4?",
        options: [
          { id: "1", value: 6 },
          { id: "2", value: 5 },
          { id: "3", value: 4 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback: "Empieza en 10 y cuenta hacia atrás 4 pasos.",
      },
      {
        id: "sumas-y-restas-1-6",
        type: "fill-in",
        question: "Resuelve: 12 - 5.",
        correctAnswer: 7,
        incorrectAnswerFeedback:
          "Resta primero 2 para llegar a 10 y luego los 3 restantes.",
      },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "Suma y resta de dos cifras.",
    difficulty: 2,
    exercises: [
      {
        id: "sumas-y-restas-2-1",
        type: "select",
        question: "¿Cuánto es 23 + 17?",
        options: [
          { id: "1", value: 39 },
          { id: "2", value: 40 },
          { id: "3", value: 41 },
        ],
        correctAnswer: "2",
        incorrectAnswerFeedback:
          "Suma primero las decenas (20+10) y luego las unidades (3+7).",
      },
      {
        id: "sumas-y-restas-2-2",
        type: "select",
        question: "Resuelve: 45 - 18.",
        options: [
          { id: "1", value: 27 },
          { id: "2", value: 28 },
          { id: "3", value: 26 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "Resta primero 5 para llegar a 40 y luego quita 13 más.",
      },
      {
        id: "sumas-y-restas-2-3",
        type: "fill-in",
        question: "¿Cuánto es 56 + 44?",
        correctAnswer: 100,
        incorrectAnswerFeedback: "56+44 hacen 100.",
      },
      {
        id: "sumas-y-restas-2-4",
        type: "fill-in",
        question: "¿Cuáanto es 85 - 29?",
        correctAnswer: 56,
        incorrectAnswerFeedback: "85-25=60, luego quita 4 más.",
      },
      {
        id: "sumas-y-restas-2-5",
        type: "fill-in",
        question:
          "Si tienes 28 lápices y regalas 12, ¿cuántos lápices te quedan?",
        correctAnswer: 16,
        incorrectAnswerFeedback: "Resta 28-10=18 y luego quita 2 más.",
      },
      {
        id: "sumas-y-restas-2-6",
        type: "fill-in",
        question: "¿Cuánto es 72 - 36?",
        correctAnswer: 36,
        incorrectAnswerFeedback: "Divide en pasos: 72-30=42, luego quita 6.",
      },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description: "Suma y resta, aumentando la dificultad 💪.",
    difficulty: 3,
    exercises: [
      {
        id: "sumas-y-restas-3-1",
        type: "fill-in",
        question: "¿Cuánto es 47 + 28?",
        correctAnswer: 75,
        incorrectAnswerFeedback:
          "Suma unidades: 7+8=15, lleva 1; luego 4+2+1=7.",
      },
      {
        id: "sumas-y-restas-3-2",
        type: "select",
        question: "¿Cuánto es 58 + 67?",
        options: [
          { id: "1", value: 125 },
          { id: "2", value: 115 },
          { id: "3", value: 135 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback: "8+7=15 (lleva 1), 5+6+1=12: 125.",
      },
      {
        id: "sumas-y-restas-3-3",
        type: "fill-in",
        question: "¿Cuánto es 103 - 57?",
        correctAnswer: 46,
        incorrectAnswerFeedback:
          "Pide prestado: 103-50=53, luego quita 7=46.",
      },
      {
        id: "sumas-y-restas-3-4",
        type: "fill-in",
        question: "¿Cuánto es 200 - 89?",
        correctAnswer: 111,
        incorrectAnswerFeedback: "200-90=110, luego suma 1.",
      },
      {
        id: "sumas-y-restas-3-5",
        type: "select",
        question: "Resuelve: 76 + 19.",
        options: [
          { id: "1", value: 95 },
          { id: "2", value: 85 },
          { id: "3", value: 97 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback: "6+9=15, lleva 1; 7+1+1=9: 95?",
      },
      {
        id: "sumas-y-restas-3-6",
        type: "fill-in",
        question: "Resuelve: 150 - 76.",
        correctAnswer: 74,
        incorrectAnswerFeedback: "150-70=80, luego quita 6=74.",
      },
    ],
  },
  {
    name: "Nivel 4",
    slug: "nivel-4",
    description: "Problemas de sumas y restas en contexto real.",
    difficulty: 4,
    exercises: [
      {
        id: "sumas-y-restas-4-1",
        type: "fill-in",
        question:
          "Si compras 3 cajas de 12 galletas y regalas 15 galletas, ¿cuántas te quedan?",
        correctAnswer: 21,
        incorrectAnswerFeedback: "3×12=36, 36-15=21.",
      },
      {
        id: "sumas-y-restas-4-2",
        type: "select",
        question:
          "Juan tenía 120 canicas, perdió 45 y luego ganó 25. ¿Cuántas tiene ahora?",
        options: [
          { id: "1", value: 100 },
          { id: "2", value: 80 },
          { id: "3", value: 90 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback: "120-45=75, +25=100.",
      },
      {
        id: "sumas-y-restas-4-3",
        type: "fill-in",
        question:
          "Un granjero recoge 230 huevos, vende 115 y regala 30. ¿Cuántos huevos le quedan?",
        correctAnswer: 85,
        incorrectAnswerFeedback: "230-115=115, 115-30=85.",
      },
      {
        id: "sumas-y-restas-4-4",
        type: "fill-in",
        question:
          "En un festival hay 500 globos, explotan 123. ¿Cuántos quedan?",
        correctAnswer: 377,
        incorrectAnswerFeedback: "500-123=377.",
      },
    ],
  },
];
