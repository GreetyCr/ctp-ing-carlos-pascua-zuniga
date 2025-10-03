import { NavigationItem } from "@/types";
import { SPECIALTIES } from "./SPECIALTIES";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "inicio",
    label: "Inicio",
    href: "/"
  },
  {
    id: "especialidades",
    label: "Especialidades",
    children: SPECIALTIES.map(specialty => ({
      id: specialty.id,
      label: specialty.name,
      href: `/especialidades/${specialty.id}`
    }))
  },
  {
    id: "nosotros",
    label: "Sobre Nosotros",
    href: "/nosotros"
  },
  {
    id: "horarios",
    label: "Horarios",
    href: "/horarios"
  },
  {
    id: "matricula",
    label: "Proceso de Matrícula",
    href: "/matricula"
  },
  {
    id: "contacto",
    label: "Contacto",
    href: "/contacto"
  }
];
