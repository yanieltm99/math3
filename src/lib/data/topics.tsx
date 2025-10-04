import type { Topic } from "../types";
import { BookOpen, Plus, Asterisk, DivideCircle, RulerIcon, Triangle } from "lucide-react";
import { lecturaEscrituraLevels } from "./exercises/lectura-escritura";
import { sumasRestasLevels } from "./exercises/sumas-restas";
import { multiplicacionLevels } from "./exercises/multiplicacion";
import { divisionLevels } from "./exercises/division";
import { medidasLevels } from "./exercises/medidas";
import { geometriaLevels } from "./exercises/geometria";

export const topics: Topic[] = [
  {
    name: "Lectura y Escritura de Números",
    slug: "lectura-escritura-numeros",
    description:
      "Ejercicios para leer, escribir y comprender el valor posicional de los números.",
    icon: <BookOpen className="h-6 w-6" />,
    colorClass: "bg-indigo-100",
    levels: lecturaEscrituraLevels,
  },
  {
    name: "Sumas y Restas",
    slug: "sumas-y-restas",
    description: "Ejercicios de sumas y restas.",
    icon: <Plus className="h-6 w-6" />,
    colorClass: "bg-green-100",
    levels: sumasRestasLevels,
  },
  {
    name: "Multiplicación",
    slug: "multiplicacion",
    description: "Ejercicios de multiplicación.",
    icon: <Asterisk className="h-6 w-6" />,
    colorClass: "bg-yellow-100",
    levels: multiplicacionLevels,
  },
  {
    name: "División",
    slug: "division",
    description: "Ejercicios de división.",
    icon: <DivideCircle className="h-6 w-6" />,
    colorClass: "bg-blue-100",
    levels: divisionLevels,
  },
  {
    name: "Medidas",
    slug: "medidas",
    description:
      "Ejercicios de medidas para aprender a medir longitudes, volúmenes y pesos en diferentes unidades.",
    icon: <RulerIcon className="h-6 w-6" />,
    colorClass: "bg-blue-100",
    levels: medidasLevels,
  },
  {
    name: "Geometría",
    slug: "geometria",
    description: "Figuras, perímetros y áreas.",
    icon: <Triangle className="h-6 w-6" />,
    colorClass: "bg-purple-100",
    levels: geometriaLevels,
  },
];
