import type { Level } from "../../types";

export const lecturaEscrituraLevels: Level[] = [
  {
    name: "Nivel 1",
    slug: "nivel-1",
    description: "Identificación y lectura de números hasta el 100.",
    difficulty: 1,
    exercises: [
      {
        id: "lectura-1-1",
        type: "fill-in",
        question: "Escribe con números: setenta y dos.",
        correctAnswer: 72,
        incorrectAnswerFeedback:
          "Recuerda que ‘setenta y dos’ corresponde al 7 en las decenas y 2 en las unidades.",
      },
      {
        id: "lectura-1-2",
        type: "select",
        question: "¿Cómo se lee el número 45?",
        options: [
          { id: "1", value: "Cuarenta y cinco" },
          { id: "2", value: "Cincuenta y cuatro" },
          { id: "3", value: "Cuarenta y seis" },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "45 es ‘cuarenta y cinco’: 4 decenas y 5 unidades.",
      },
      {
        id: "lectura-1-3",
        type: "fill-in",
        question: "Escribe con palabras: 88.",
        correctAnswer: "ochenta y ocho",
        incorrectAnswerFeedback:
          "Piensa: 8 decenas (ochenta) y 8 unidades (ocho).",
      },
      {
        id: "lectura-1-4",
        type: "select",
        question: "¿Cuál es el número 59 en palabras?",
        options: [
          { id: "1", value: "Cincuenta y nueve" },
          { id: "2", value: "Sesenta y nueve" },
          { id: "3", value: "Cincuenta y ocho" },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "5 decenas es cincuenta y 9 unidades: nueve.",
      },
      {
        id: "lectura-1-5",
        type: "fill-in",
        question: "Escribe con números: treinta y seis.",
        correctAnswer: 36,
        incorrectAnswerFeedback:
          "Treinta = 3 decenas (30) y seis unidades = 36.",
      },
      {
        id: "lectura-1-6",
        type: "select",
        question: "¿Cómo se lee el número 20?",
        options: [
          { id: "1", value: "Veinte" },
          { id: "2", value: "Treinta" },
          { id: "3", value: "Cien" },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "20 en palabras es ‘veinte’, no confundir con treinta (30).",
      },
    ],
  },
  {
    name: "Nivel 2",
    slug: "nivel-2",
    description: "Escritura y lectura de números hasta 999 y valor posicional.",
    difficulty: 2,
    exercises: [
      {
        id: "lectura-2-1",
        type: "fill-in",
        question: "Escribe con números: trescientos veinticinco.",
        correctAnswer: 325,
        incorrectAnswerFeedback: "300 + 20 + 5 = 325.",
      },
      {
        id: "lectura-2-2",
        type: "select",
        question: "¿Cómo se lee 408?",
        options: [
          { id: "1", value: "Cuatrocientos ocho" },
          { id: "2", value: "Cuatrocientos ochenta" },
          { id: "3", value: "Ochocientos cuatro" },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "408 = 4 centenas, 0 decenas, 8 unidades: cuatrocientos ocho.",
      },
      {
        id: "lectura-2-3",
        type: "fill-in",
        question: "Escribe con palabras: 512.",
        correctAnswer: "quinientos doce",
        incorrectAnswerFeedback:
          "512 = 5 centenas (quinientos) + 12: doce.",
      },
      {
        id: "lectura-2-4",
        type: "select",
        question: "¿Cuál es el valor posicional del dígito 7 en 672?",
        options: [
          { id: "1", value: "7 unidades" },
          { id: "2", value: "7 decenas" },
          { id: "3", value: "7 centenas" },
        ],
        correctAnswer: "2",
        incorrectAnswerFeedback:
          "En 672, el 7 ocupa el lugar de las decenas (70).",
      },
      {
        id: "lectura-2-5",
        type: "fill-in",
        question: "Escribe con números: doscientos cuarenta y tres.",
        correctAnswer: 243,
        incorrectAnswerFeedback: "200 + 40 + 3 = 243.",
      },
      {
        id: "lectura-2-6",
        type: "select",
        question: "¿Cómo se lee 999?",
        options: [
          { id: "1", value: "Novecientos noventa y nueve" },
          { id: "2", value: "Novecientos nueve y noventa" },
          { id: "3", value: "Ochocientos noventa y nueve" },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback:
          "9 centenas = novecientos; 9 decenas = noventa; 9 unidades = nueve.",
      },
    ],
  },
  {
    name: "Nivel 3",
    slug: "nivel-3",
    description:
      "Comparación, ordenación y descomposición de números hasta el 1 000.",
    difficulty: 3,
    exercises: [
      {
        id: "lectura-3-1",
        type: "select",
        question: "¿Cuál es mayor?",
        options: [
          { id: "1", value: 348 },
          { id: "2", value: 384 },
          { id: "3", value: 438 },
        ],
        correctAnswer: "3",
        incorrectAnswerFeedback: "438 es mayor que 384 y 348.",
      },
      {
        id: "lectura-3-2",
        type: "fill-in",
        question: "Ordena de menor a mayor: 512, 125, 215.",
        correctAnswer: "125, 215, 512",
        incorrectAnswerFeedback: "Compara centenas primero (1<2<5).",
      },
      {
        id: "lectura-3-3",
        type: "fill-in",
        question: "Descompón 763 en centenas, decenas y unidades.",
        correctAnswer: "700+60+3",
        incorrectAnswerFeedback:
          "763 = 7 centenas (700) + 6 decenas (60) + 3 unidades.",
      },
      {
        id: "lectura-3-4",
        type: "select",
        question: "¿Qué número falta? 899, ___, 901",
        options: [
          { id: "1", value: 900 },
          { id: "2", value: 902 },
          { id: "3", value: 898 },
        ],
        correctAnswer: "1",
        incorrectAnswerFeedback: "Entre 899 y 901 está el 900.",
      },
      {
        id: "lectura-3-5",
        type: "fill-in",
        question: "Escribe con palabras: 745.",
        correctAnswer: "setecientos cuarenta y cinco",
        incorrectAnswerFeedback:
          "700 + 40 + 5 = setecientos cuarenta y cinco.",
      },
      {
        id: "lectura-3-6",
        type: "select",
        question: "¿Cuál es el valor posicional del dígito 1 en 1 234?",
        options: [
          { id: "1", value: "1 en las unidades" },
          { id: "2", value: "1 en los miles" },
          { id: "3", value: "1 en las decenas" },
        ],
        correctAnswer: "2",
        incorrectAnswerFeedback:
          "En 1 234, el 1 está en el lugar de los miles (1 000).",
      },
    ],
  },
];
