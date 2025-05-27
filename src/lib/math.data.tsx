import {
  Asterisk,
  BookOpen,
  DivideCircle,
  Plus,
  RulerIcon,
  Triangle,
} from "lucide-react";
import { type Exercise, type Topic } from "./types";

export const topics: Topic[] = [
  {
    name: "Lectura y Escritura de Números",
    slug: "lectura-escritura-numeros",
    description:
      "Ejercicios para leer, escribir y comprender el valor posicional de los números.",
    icon: <BookOpen className="h-6 w-6" />,
    colorClass: "bg-indigo-100",
    levels: [
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
        description:
          "Escritura y lectura de números hasta 999 y valor posicional.",
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
    ],
  },
  {
    name: "Sumas y Restas",
    slug: "sumas-y-restas",
    description: "Ejercicios de sumas y restas.",
    icon: <Plus className="h-6 w-6" />,
    colorClass: "bg-green-100",
    levels: [
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
            incorrectAnswerFeedback:
              "Empieza en 10 y cuenta hacia atrás 4 pasos.",
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
            incorrectAnswerFeedback:
              "Divide en pasos: 72-30=42, luego quita 6.",
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
    ],
  },
  {
    name: "Multiplicación",
    slug: "multiplicacion",
    description: "Ejercicios de multiplicación.",
    icon: <Asterisk className="h-6 w-6" />,
    colorClass: "bg-yellow-100",
    levels: [
      {
        name: "Nivel 1",
        slug: "nivel-1",
        description: "Multiplicación básica de números pequeños.",
        difficulty: 1,
        exercises: [
          {
            id: "multiplicacion-1-1",
            type: "fill-in",
            question: "¿Cuánto es 2 × 3?",
            correctAnswer: 6,
            incorrectAnswerFeedback:
              "Recuerda que multiplicar es como sumar 2 tres veces: 2 + 2 + 2.",
          },
          {
            id: "multiplicacion-1-2",
            type: "select",
            question: "¿Cuánto es 4 × 5?",
            options: [
              { id: "1", value: 20 },
              { id: "2", value: 25 },
              { id: "3", value: 15 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback:
              "Piensa en cuántos son 4 veces 5 o 5 veces 4.",
          },
          {
            id: "multiplicacion-1-3",
            type: "fill-in",
            question: "¿Cuánto es 3 × 6?",
            correctAnswer: 18,
            incorrectAnswerFeedback: "Recuerda: 3 + 3 + 3 + 3 + 3 + 3 = 18.",
          },
          {
            id: "multiplicacion-1-4",
            type: "fill-in",
            question: "¿Cuánto es 5 × 2?",
            correctAnswer: 10,
            incorrectAnswerFeedback: "Multiplica 5 por 2 o suma 5 + 5.",
          },
          {
            id: "multiplicacion-1-5",
            type: "select",
            question: "¿Cuánto es 1 × 9?",
            options: [
              { id: "1", value: 9 },
              { id: "2", value: 0 },
              { id: "3", value: 1 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback: "Multiplicar por 1 da el mismo número.",
          },
          {
            id: "multiplicacion-1-6",
            type: "fill-in",
            question: "¿Cuánto es 7 × 0?",
            correctAnswer: 0,
            incorrectAnswerFeedback:
              "Todo número multiplicado por 0 da como resultado 0.",
          },
        ],
      },
      {
        name: "Nivel 2",
        slug: "nivel-2",
        description: "Multiplicación de números de dos cifras.",
        difficulty: 2,
        exercises: [
          {
            id: "multiplicacion-2-1",
            type: "fill-in",
            question: "¿Cuánto es 12 × 3?",
            correctAnswer: 36,
            incorrectAnswerFeedback:
              "Multiplica 10 × 3 y luego 2 × 3. Suma ambos.",
          },
          {
            id: "multiplicacion-2-2",
            type: "select",
            question: "¿Cuánto es 15 × 2?",
            options: [
              { id: "1", value: 30 },
              { id: "2", value: 25 },
              { id: "3", value: 20 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback: "Multiplica 10 × 2 y 5 × 2. Suma ambos.",
          },
          {
            id: "multiplicacion-2-3",
            type: "fill-in",
            question: "¿Cuánto es 9 × 6?",
            correctAnswer: 54,
            incorrectAnswerFeedback:
              "Piensa en la tabla del 9: 9, 18, 27, 36, 45, 54.",
          },
          {
            id: "multiplicacion-2-4",
            type: "select",
            question: "¿Cuánto es 7 × 8?",
            options: [
              { id: "1", value: 54 },
              { id: "2", value: 56 },
              { id: "3", value: 58 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "Revisa la tabla del 7 o del 8.",
          },
          {
            id: "multiplicacion-2-5",
            type: "fill-in",
            question: "¿Cuánto es 11 × 11?",
            correctAnswer: 121,
            incorrectAnswerFeedback: "Recuerda que 11 × 11 = 121.",
          },
          {
            id: "multiplicacion-2-6",
            type: "fill-in",
            question:
              "Si compras 4 cajas con 9 lápices cada una, ¿cuántos lápices tienes en total?",
            correctAnswer: 36,
            incorrectAnswerFeedback:
              "Multiplica 4 por 9 para saber cuántos lápices tienes.",
          },
        ],
      },
      {
        name: "Nivel 3",
        slug: "nivel-3",
        description:
          "Multiplicación con números grandes y problemas de contexto.",
        difficulty: 3,
        exercises: [
          {
            id: "multiplicacion-3-1",
            type: "fill-in",
            question: "¿Cuánto es 23 × 4?",
            correctAnswer: 92,
            incorrectAnswerFeedback:
              "Descompón el 23 en 20 y 3. Luego multiplica y suma: (20 × 4) + (3 × 4).",
          },
          {
            id: "multiplicacion-3-2",
            type: "select",
            question: "¿Cuánto es 16 × 12?",
            options: [
              { id: "1", value: 192 },
              { id: "2", value: 196 },
              { id: "3", value: 186 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback:
              "Verifica haciendo la multiplicación paso a paso.",
          },
          {
            id: "multiplicacion-3-3",
            type: "fill-in",
            question:
              "Una caja tiene 25 paquetes y cada paquete tiene 8 galletas. ¿Cuántas galletas hay en total?",
            correctAnswer: 200,
            incorrectAnswerFeedback:
              "Multiplica 25 por 8 para saber cuántas galletas hay en total.",
          },
          {
            id: "multiplicacion-3-4",
            type: "select",
            question: "¿Cuál es el resultado de 45 × 7?",
            options: [
              { id: "1", value: 305 },
              { id: "2", value: 315 },
              { id: "3", value: 325 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback:
              "Puedes descomponer 45 en 40 y 5 para facilitar el cálculo.",
          },
          {
            id: "multiplicacion-3-5",
            type: "fill-in",
            question:
              "Una fábrica produce 125 botellas al día. ¿Cuántas botellas produce en 6 días?",
            correctAnswer: 750,
            incorrectAnswerFeedback:
              "Multiplica 125 por 6 para saber la producción total.",
          },
          {
            id: "multiplicacion-3-6",
            type: "fill-in",
            question: "¿Cuánto es 100 × 13?",
            correctAnswer: 1300,
            incorrectAnswerFeedback:
              "Multiplica como si fuera 13 y añade dos ceros al final.",
          },
        ],
      },
    ],
  },
  {
    name: "División",
    slug: "division",
    description: "Ejercicios de división.",
    icon: <DivideCircle className="h-6 w-6" />,
    colorClass: "bg-blue-100",
    levels: [
      {
        name: "Nivel 1",
        slug: "nivel-1",
        description: "División exacta con divisores de una cifra.",
        difficulty: 1,
        exercises: [
          {
            id: "division-1-1",
            type: "fill-in",
            question: "¿Cuánto es 6 ÷ 2?",
            correctAnswer: 3,
            incorrectAnswerFeedback:
              "Piensa: ¿en cuántos grupos de 2 cabe el 6?",
          },
          {
            id: "division-1-2",
            type: "select",
            question: "¿Cuánto es 9 ÷ 3?",
            options: [
              { id: "1", value: 2 },
              { id: "2", value: 3 },
              { id: "3", value: 4 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "9 dividido en grupos de 3 es 3 grupos.",
          },
          {
            id: "division-1-3",
            type: "fill-in",
            question: "¿Cuánto es 8 ÷ 4?",
            correctAnswer: 2,
            incorrectAnswerFeedback:
              "8 dividido en 4 partes iguales da 2 en cada parte.",
          },
          {
            id: "division-1-4",
            type: "select",
            question: "¿Cuánto es 5 ÷ 1?",
            options: [
              { id: "1", value: 5 },
              { id: "2", value: 1 },
              { id: "3", value: 0 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback:
              "Todo número dividido por 1 es el mismo número.",
          },
          {
            id: "division-1-5",
            type: "fill-in",
            question: "¿Cuánto es 4 ÷ 2?",
            correctAnswer: 2,
            incorrectAnswerFeedback: "Divide 4 en dos grupos iguales.",
          },
          {
            id: "division-1-6",
            type: "fill-in",
            question: "¿Cuánto es 10 ÷ 5?",
            correctAnswer: 2,
            incorrectAnswerFeedback: "¿Cuántos 5 caben en 10?",
          },
        ],
      },
      {
        name: "Nivel 2",
        slug: "nivel-2",
        description: "División con divisor de una cifra y contexto práctico.",
        difficulty: 2,
        exercises: [
          {
            id: "division-2-1",
            type: "fill-in",
            question:
              "Tienes 12 galletas y las repartes entre 4 amigos. ¿Cuántas recibe cada uno?",
            correctAnswer: 3,
            incorrectAnswerFeedback: "Divide 12 galletas en 4 partes iguales.",
          },
          {
            id: "division-2-2",
            type: "select",
            question: "¿Cuánto es 14 ÷ 7?",
            options: [
              { id: "1", value: 2 },
              { id: "2", value: 1 },
              { id: "3", value: 7 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback:
              "14 dividido en grupos de 7 da 2 grupos, pero cada grupo es…",
          },
          {
            id: "division-2-3",
            type: "fill-in",
            question: "¿Cuánto es 15 ÷ 3?",
            correctAnswer: 5,
            incorrectAnswerFeedback: "3 cabe 5 veces en 15.",
          },
          {
            id: "division-2-4",
            type: "select",
            question:
              "Si tienes 18 lápices y los metes en cajas de 6, ¿cuántas cajas completas llenas?",
            options: [
              { id: "1", value: 2 },
              { id: "2", value: 3 },
              { id: "3", value: 4 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "18 ÷ 6 = 3 cajas, ¡ojo con las cifras!",
          },
          {
            id: "division-2-5",
            type: "fill-in",
            question: "¿Cuánto es 20 ÷ 4?",
            correctAnswer: 5,
            incorrectAnswerFeedback: "Divide 20 en 4 grupos iguales.",
          },
          {
            id: "division-2-6",
            type: "fill-in",
            question:
              "Reparte 24 monedas en 8 amigos. ¿Cuántas monedas recibe cada uno?",
            correctAnswer: 3,
            incorrectAnswerFeedback: "24 ÷ 8 = 3.",
          },
        ],
      },
      {
        name: "Nivel 3",
        slug: "nivel-3",
        description: "División con divisor de dos cifras y resto.",
        difficulty: 3,
        exercises: [
          {
            id: "division-3-1",
            type: "fill-in",
            question: "¿Cuánto es 56 ÷ 7?",
            correctAnswer: 8,
            incorrectAnswerFeedback: "7 × 8 = 56.",
          },
          {
            id: "division-3-2",
            type: "fill-in",
            question: "¿Cuánto es 45 ÷ 12? (escribe solo la parte entera)",
            correctAnswer: 3,
            incorrectAnswerFeedback:
              "12 × 3 = 36; 12 × 4 = 48 que ya es mayor que 45.",
          },
          {
            id: "division-3-3",
            type: "select",
            question: "¿Cuánto es 84 ÷ 14?",
            options: [
              { id: "1", value: 6 },
              { id: "2", value: 7 },
              { id: "3", value: 8 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "14 × 6 = 84.",
          },
          {
            id: "division-3-4",
            type: "fill-in",
            question:
              "Reparte 100 caramelos en grupos de 15. ¿Cuántos grupos completos?",
            correctAnswer: 6,
            incorrectAnswerFeedback: "15 × 6 = 90; 15 × 7 = 105 (>100).",
          },
          {
            id: "division-3-5",
            type: "fill-in",
            question: "¿Cuánto es 72 ÷ 8?",
            correctAnswer: 9,
            incorrectAnswerFeedback: "8 × 9 = 72.",
          },
          {
            id: "division-3-6",
            type: "select",
            question: "¿Cuánto es 99 ÷ 11?",
            options: [
              { id: "1", value: 8 },
              { id: "2", value: 9 },
              { id: "3", value: 10 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "11 × 9 = 99.",
          },
        ],
      },
    ],
  },
  {
    name: "Medidas",
    slug: "medidas",
    description:
      "Ejercicios de medidas para aprender a medir longitudes, volúmenes y pesos en diferentes unidades.",
    icon: <RulerIcon className="h-6 w-6" />,
    colorClass: "bg-blue-100",
    levels: [
      {
        name: "Nivel 1",
        slug: "nivel-1",
        description: "Unidades básicas: cm, m, g, kg, ml, l.",
        difficulty: 1,
        exercises: [
          {
            id: "medidas-1-1",
            type: "fill-in",
            question: "¿Cuántos centímetros hay en 1 metro?",
            correctAnswer: 100,
            incorrectAnswerFeedback: "1 m = 100 cm.",
          },
          {
            id: "medidas-1-2",
            type: "select",
            question: "¿Cuántos mililitros hay en 1 litro?",
            options: [
              { id: "1", value: 500 },
              { id: "2", value: 1000 },
              { id: "3", value: 1500 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "1 L = 1000 mL.",
          },
          {
            id: "medidas-1-3",
            type: "fill-in",
            question: "¿Cuántos gramos hay en 1 kilogramo?",
            correctAnswer: 1000,
            incorrectAnswerFeedback: "1 kg = 1000 g.",
          },
          {
            id: "medidas-1-4",
            type: "fill-in",
            question: "¿Cuántos segundos hay en 1 minuto?",
            correctAnswer: 60,
            incorrectAnswerFeedback: "1 min = 60 s.",
          },
          {
            id: "medidas-1-5",
            type: "select",
            question: "¿Cuántos minutos hay en 1 hora?",
            options: [
              { id: "1", value: 30 },
              { id: "2", value: 60 },
              { id: "3", value: 120 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "1 h = 60 min.",
          },
        ],
      },
      {
        name: "Nivel 2",
        slug: "nivel-2",
        description: "Conversiones entre unidades: cm↔m, g↔kg, ml↔l.",
        difficulty: 2,
        exercises: [
          {
            id: "medidas-2-1",
            type: "fill-in",
            question: "Convierte 250 cm a metros.",
            correctAnswer: 2.5,
            incorrectAnswerFeedback: "100 cm = 1 m, por tanto 250 cm = 2.5 m.",
          },
          {
            id: "medidas-2-2",
            type: "fill-in",
            question: "Convierte 3.2 m a centímetros.",
            correctAnswer: 320,
            incorrectAnswerFeedback: "1 m = 100 cm, 3.2×100 = 320 cm.",
          },
          {
            id: "medidas-2-3",
            type: "select",
            question: "¿Cuántos kilogramos son 1500 gramos?",
            options: [
              { id: "1", value: 0.5 },
              { id: "2", value: 1.5 },
              { id: "3", value: 1 },
            ],
            correctAnswer: "3",
            incorrectAnswerFeedback: "1000 g = 1 kg, 1500 g = 1.5 kg.",
          },
          {
            id: "medidas-2-4",
            type: "fill-in",
            question: "Convierte 2.75 L a mililitros.",
            correctAnswer: 2750,
            incorrectAnswerFeedback: "1 L = 1000 mL, 2.75×1000 = 2750 mL.",
          },
          {
            id: "medidas-2-5",
            type: "fill-in",
            question: "¿Cuántos gramos hay en 0.2 kg?",
            correctAnswer: 200,
            incorrectAnswerFeedback: "0.2×1000 = 200 g.",
          },
          {
            id: "medidas-2-6",
            type: "select",
            question: "¿Cuántos litros son 5000 mL?",
            options: [
              { id: "1", value: 0.5 },
              { id: "2", value: 5 },
              { id: "3", value: 50 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback: "1000 mL = 1 L, 5000 mL = 5 L.",
          },
        ],
      },
      {
        name: "Nivel 3",
        slug: "nivel-3",
        description: "Operaciones con unidades: sumas y restas de medidas.",
        difficulty: 3,
        exercises: [
          {
            id: "medidas-3-1",
            type: "fill-in",
            question: "¿Cuántos centímetros hay en 1.5 m + 75 cm?",
            correctAnswer: 225,
            incorrectAnswerFeedback: "1.5 m = 150 cm, +75 = 225 cm.",
          },
          {
            id: "medidas-3-2",
            type: "fill-in",
            question: "Resta 3 L - 750 mL.",
            correctAnswer: 2.25,
            incorrectAnswerFeedback: "3 L = 3000 mL, -750 = 2250 mL = 2.25 L.",
          },
          {
            id: "medidas-3-3",
            type: "select",
            question: "Suma 500 g + 0.75 kg.",
            options: [
              { id: "1", value: 1.25 },
              { id: "2", value: 1.15 },
              { id: "3", value: 1 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback:
              "0.75 kg = 750 g, +500 = 1250 g = 1.25 kg.",
          },
          {
            id: "medidas-3-4",
            type: "fill-in",
            question: "Convierte y suma 2 m + 150 cm.",
            correctAnswer: 350,
            incorrectAnswerFeedback: "2 m = 200 cm, +150 = 350 cm.",
          },
          {
            id: "medidas-3-5",
            type: "fill-in",
            question: "Resta 5 km - 1200 m (en metros).",
            correctAnswer: 3800,
            incorrectAnswerFeedback: "5 km = 5000 m, -1200 = 3800 m.",
          },
          {
            id: "medidas-3-6",
            type: "select",
            question: "¿Qué resultado tienes al sumar 1.2 kg + 300 g?",
            options: [
              { id: "1", value: 1.5 },
              { id: "2", value: 1.2 },
              { id: "3", value: 1.8 },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback: "1.2 kg = 1200 g +300 = 1500 g = 1.5 kg.",
          },
        ],
      },
    ],
  },
  {
    name: "Geometría",
    slug: "geometria",
    description:
      "Ejercicios para identificar formas, calcular perímetros y áreas básicas.",
    icon: <Triangle className="h-6 w-6" />,
    colorClass: "bg-purple-100",
    levels: [
      {
        name: "Nivel 1",
        slug: "nivel-1",
        description: "Identificación de figuras geométricas básicas.",
        difficulty: 1,
        exercises: [
          {
            id: "geo-1-1",
            type: "select",
            question: "¿Cuál de estas figuras tiene 3 lados?",
            options: [
              { id: "1", value: "Cuadrado" },
              { id: "2", value: "Triángulo" },
              { id: "3", value: "Círculo" },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "El triángulo tiene 3 lados.",
          },
          {
            id: "geo-1-2",
            type: "fill-in",
            question: "¿Cuántos lados tiene un cuadrado?",
            correctAnswer: 4,
            incorrectAnswerFeedback: "El cuadrado tiene 4 lados iguales.",
          },
          {
            id: "geo-1-3",
            type: "select",
            question: "¿Qué figura no tiene lados?",
            options: [
              { id: "1", value: "Círculo" },
              { id: "2", value: "Rectángulo" },
              { id: "3", value: "Pentágono" },
            ],
            correctAnswer: "1",
            incorrectAnswerFeedback: "El círculo es redondo y no tiene lados.",
          },
          {
            id: "geo-1-4",
            type: "fill-in",
            question: "¿Cuántos lados tiene un hexágono?",
            correctAnswer: 6,
            incorrectAnswerFeedback: "Hexa significa seis.",
          },
        ],
      },
      {
        name: "Nivel 2",
        slug: "nivel-2",
        description: "Perímetro de figuras planas regulares.",
        difficulty: 2,
        exercises: [
          {
            id: "geo-2-1",
            type: "fill-in",
            question: "¿Cuál es el perímetro de un cuadrado de lado 5 cm?",
            correctAnswer: 20,
            incorrectAnswerFeedback: "Perímetro del cuadrado = lado × 4.",
          },
          {
            id: "geo-2-2",
            type: "fill-in",
            question:
              "¿Cuál es el perímetro de un triángulo con lados 3 cm, 4 cm y 5 cm?",
            correctAnswer: 12,
            incorrectAnswerFeedback: "Suma los tres lados: 3 + 4 + 5.",
          },
          {
            id: "geo-2-3",
            type: "select",
            question:
              "Un rectángulo tiene lados de 6 cm y 2 cm. ¿Cuál es su perímetro?",
            options: [
              { id: "1", value: 8 },
              { id: "2", value: 12 },
              { id: "3", value: 16 },
            ],
            correctAnswer: "3",
            incorrectAnswerFeedback: "Perímetro = (6 + 2) × 2.",
          },
          {
            id: "geo-2-4",
            type: "fill-in",
            question:
              "¿Cuál es el perímetro de un pentágono regular de lado 4 cm?",
            correctAnswer: 20,
            incorrectAnswerFeedback:
              "Perímetro = número de lados × longitud del lado.",
          },
        ],
      },
      {
        name: "Nivel 3",
        slug: "nivel-3",
        description:
          "Área de figuras planas: cuadrado, rectángulo y triángulo.",
        difficulty: 3,
        exercises: [
          {
            id: "geo-3-1",
            type: "fill-in",
            question: "¿Cuál es el área de un cuadrado de lado 6 cm?",
            correctAnswer: 36,
            incorrectAnswerFeedback: "Área del cuadrado = lado × lado.",
          },
          {
            id: "geo-3-2",
            type: "fill-in",
            question: "¿Cuál es el área de un rectángulo de 8 cm por 3 cm?",
            correctAnswer: 24,
            incorrectAnswerFeedback: "Área = base × altura.",
          },
          {
            id: "geo-3-3",
            type: "fill-in",
            question:
              "¿Cuál es el área de un triángulo de base 10 cm y altura 4 cm?",
            correctAnswer: 20,
            incorrectAnswerFeedback:
              "Área del triángulo = (base × altura) ÷ 2.",
          },
          {
            id: "geo-3-4",
            type: "select",
            question: "Un rectángulo de 5 cm × 2 cm tiene área de:",
            options: [
              { id: "1", value: 7 },
              { id: "2", value: 10 },
              { id: "3", value: 12 },
            ],
            correctAnswer: "2",
            incorrectAnswerFeedback: "5 × 2 = 10.",
          },
        ],
      },
    ],
  },
];

export function getTopics(): Topic[] {
  return topics;
}

export function getTopic(topicSlug: string): Topic | undefined {
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!topic) return;
  return topic;
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
