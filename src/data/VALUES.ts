import { Value } from "@/types";

export const VALUES: Value[] = [
  {
    id: "formativos",
    category: "Valores Formativos",
    values: ["Disciplina", "Compromiso", "Orden", "Responsabilidad", "Puntualidad", "Esfuerzo", "Constancia"],
    icon: "Award",
    description: "Valores fundamentales que desarrollan la capacidad de trabajo y dedicación de nuestros estudiantes"
  },
  {
    id: "morales",
    category: "Valores Morales",
    values: ["Honor", "Sinceridad", "Honestidad", "Verdad", "Respeto"],
    icon: "Heart",
    description: "Principios éticos que guían el comportamiento y la integridad personal"
  },
  {
    id: "espirituales",
    category: "Valores Espirituales",
    values: ["Justicia", "Amor", "Perdón", "Fe"],
    icon: "Sun",
    description: "Valores que nutren el desarrollo espiritual y la conexión con principios superiores"
  },
  {
    id: "sociales",
    category: "Valores Sociales",
    values: ["Solidaridad", "Cooperación", "Tolerancia", "Cortesía", "Equidad", "Igualdad", "Convivencia", "Inclusión"],
    icon: "Users",
    description: "Valores que promueven la convivencia armónica y el respeto por la diversidad"
  },
  {
    id: "ambientales",
    category: "Valores Ambientales",
    values: ["Protección", "Reciclaje", "Equilibrio", "Uso racional de los recursos naturales"],
    icon: "Leaf",
    description: "Compromiso con la sostenibilidad y el cuidado del medio ambiente"
  }
];

export const VALORES_SECTION_CONTENT = {
  title: "Nuestros Valores Institucionales",
  subtitle: "Los valores que guían nuestra formación integral y desarrollo estudiantil",
  description: "El personal docente, docente administrativo y administrativo, respondiendo a su función educativa procurarán para la formación de las personas estudiantes la creación de todos los espacios posibles para el fomento y la práctica de los siguientes valores:",
  commitment: "Nos comprometemos a crear todos los espacios posibles para el fomento y la práctica de estos valores en cada estudiante."
};
