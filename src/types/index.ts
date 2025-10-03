// Tipos principales del proyecto CTP Ing. Carlos Pascua Zúñiga

export interface Specialty {
  id: string;
  name: string;
  description: string;
  duration: string;
  modality: string;
  icon: string;
  totalHours: number;
  profile: string[];
  curriculum: {
    grade: string;
    subjects: {
      name: string;
      hoursPerWeek: number;
      hoursPerYear: number;
    }[];
    totalHoursPerWeek: number;
    totalHoursPerYear: number;
  }[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  hours?: string; // Pendiente del director
}

export interface CollegeInfo {
  name: string;
  fullName: string;
  location: string;
  phone: string;
  email: string;
  mission: string;
  vision: string;
}

export interface Value {
  id: string;
  category: string;
  values: string[];
  icon: string;
  description: string;
}

export interface ValoresSectionContent {
  title: string;
  subtitle: string;
  description: string;
  commitment: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface HeroContent {
  title: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface GalleryContent {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

export interface SpecialtiesSectionContent {
  title: string;
  subtitle: string;
  description: string;
}


// Tipos para componentes
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray" | "blue";
}
