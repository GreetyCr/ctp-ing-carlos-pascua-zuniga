# Arquitectura del Proyecto - CTP Ing. Carlos Pascua Zúñiga

## Estructura de Archivos

```
ctp-carlos-pascua/
├── docs/
│   ├── PROJECT_RULES.md
│   ├── ARCHITECTURE.md
│   ├── CURSOR_PROMPTS.md
│   └── logs/
│       └── [YYYY-MM-DD]_[task-name].md
├── public/
│   └── images/
│       ├── logo/
│       ├── specialties/
│       └── gallery/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   ├── specialties/
│   │   │   ├── about/
│   │   │   ├── values/
│   │   │   └── contact/
│   │   └── shared/
│   ├── data/
│   │   ├── COLLEGE_INFO.ts
│   │   ├── SPECIALTIES.ts
│   │   ├── VALUES.ts
│   │   ├── CONTACT.ts
│   │   └── NAVIGATION.ts
│   ├── lib/
│   │   ├── cn.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
└── package.json
```

## Principios Arquitectónicos

### 1. Single Responsibility
- Cada componente tiene una responsabilidad específica
- Un componente = Un archivo
- Una feature = Una carpeta

### 2. Separación de Responsabilidades
- **Datos**: Centralizados en `src/data/`
- **Componentes**: Solo lógica de presentación
- **Tipos**: Definidos en `src/types/`
- **Utilidades**: En `src/lib/`

### 3. Naming Conventions
- Componentes: PascalCase
- Utilities: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Carpetas: kebab-case

### 4. TypeScript Strict
- Todas las props tipadas
- Interfaces para todos los datos
- No usar `any` sin justificación

### 5. Mobile-First
- Diseño responsive desde móvil
- Breakpoints estándar
- Touch-friendly (48px mínimo)

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript (strict mode)
- **Icons**: lucide-react
- **Deployment**: Vercel

## Colores Institucionales

```css
--ctp-blue: #002B7F;    /* Azul institucional */
--ctp-red: #CE1126;     /* Rojo acento */
--ctp-white: #FFFFFF;   /* Blanco */
--ctp-gold: #FFD700;    /* Amarillo/Dorado */
```
