# CONTEXT.md - CTP Ing. Carlos Pascua Zúñiga

> **Archivo de contexto maestro para agentes AI/Cursor**
> Lee este archivo ANTES de trabajar en cualquier tarea del proyecto.

---

## 📋 INFORMACIÓN DEL PROYECTO

### Cliente
**Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga**
- Institución educativa pública de educación técnica
- Ubicación: C. 11, San Rafael, Heredia, Costa Rica
- Teléfono: 2237-2710
- Email: lic.ingcarlospascua@mep.go.cr
- Google Maps: https://maps.app.goo.gl/XUfi3envF2GWCaak7

### Objetivo del Sitio Web
Crear un sitio informativo institucional para ayudar a padres de familia (35-60 años) a tomar decisiones educativas informadas sobre las especialidades técnicas que ofrece el colegio.

### Características Clave
- ✅ Diseño sobrio y profesional (no moderno ni llamativo)
- ✅ Accesible para adultos mayores
- ✅ Mobile-first responsive
- ✅ Contenido informativo (no interactivo)
- ✅ Estático (sin backend, datos hardcodeados)

---

## 🛠️ STACK TECNOLÓGICO

```yaml
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS
Components: shadcn/ui (personalizado para diseño sobrio)
Language: TypeScript (strict mode)
Deployment: Vercel
Assets: Locales en /public
Type: Static Site (hardcoded data)
```

### Librerías Adicionales
- **lucide-react**: Iconos
- **next/image**: Optimización de imágenes
- **tailwindcss**: Utility-first CSS

### NO Usar
- ❌ localStorage/sessionStorage (no necesario)
- ❌ Librerías de animación complejas
- ❌ Backend/API routes (todo es estático)
- ❌ CMS externo

---

## 🎨 SISTEMA DE DISEÑO

### Paleta de Colores Institucional

```css
/* Colores Primarios - Bandera de Costa Rica + Amarillo */
--ctp-blue: #002B7F;       /* Azul institucional */
--ctp-red: #CE1126;        /* Rojo acento */
--ctp-white: #FFFFFF;      /* Blanco */
--ctp-gold: #FFD700;       /* Amarillo/Dorado */

/* Colores Secundarios */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-900: #111827;
```

### Configuración Tailwind
```javascript
// tailwind.config.ts
colors: {
  'ctp-blue': '#002B7F',
  'ctp-red': '#CE1126',
  'ctp-gold': '#FFD700',
}
```

### Tipografía
- **Font Base**: System font stack (sin custom fonts)
- **Base Size**: 16px (1rem) - NUNCA menor
- **Line Height**: 1.6-1.8 para textos largos
- **Headings**: Escala proporcional, legible

### Espaciado
- **Mobile horizontal padding**: 16px (px-4)
- **Tablet horizontal padding**: 24px (px-6)
- **Desktop max-width**: 1280px (max-w-7xl)
- **Section vertical padding**: 
  - Mobile: 48px (py-12)
  - Desktop: 80px (py-20)

### Botones y Touch Targets
- **Tamaño mínimo**: 48x48px
- **Padding interno**: px-6 py-3 (o mayor)
- **Border radius**: rounded-lg (8px)
- **Estados**: hover, focus, active claramente visibles

---

## 🏫 INFORMACIÓN INSTITUCIONAL OFICIAL

### Misión
El Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga es una institución educativa académica pública que contribuye a la formación y el desarrollo moral, espiritual, intelectual, cultural, social y laboral de las personas estudiantes, en un espacio de responsabilidad ambiental e inclusión de la diversidad. En este lugar se integran diferentes disciplinas profesionales de la región, materiales y tecnológicas, para conseguir el logro de los fines de la educación costarricense.

### Visión
El Colegio Técnico Profesional Ing. Carlos Pascua Zúñiga, como institución educativa académica pública comprometida e inclusiva, tiene como meta cultural la formación integral y el desarrollo moral, espiritual, intelectual, cultural, social y físico de las personas estudiantes, formando ciudadanos críticos, comprometidos con el país y profesionalmente exitosos.

### Valores Institucionales

El personal docente, docente administrativo y administrativo, respondiendo a su función educativa procurarán para la formación de las personas estudiantes la creación de todos los espacios posibles para el fomento y la práctica de los siguientes valores:

#### 1. Valores Formativos
Disciplina, compromiso, orden, responsabilidad, puntualidad, esfuerzo y constancia.

#### 2. Valores Morales
Honor, sinceridad, honestidad, verdad y respeto.

#### 3. Valores Espirituales
Justicia, amor, perdón y fe.

#### 4. Valores Sociales
Solidaridad, cooperación, tolerancia, cortesía, equidad, igualdad, convivencia e inclusión.

#### 5. Valores Ambientales
Protección, reciclaje, equilibrio y uso racional de los recursos naturales.

---

## 🎓 ESPECIALIDADES TÉCNICAS

> **Todas las especialidades**: 3 años de duración, modalidad presencial, total 2,840 horas lectivas

### 1. Gestión de la Calidad

**Descripción:**
La especialidad de Gestión de la Calidad forma técnicos altamente capacitados para diseñar, implementar y mejorar sistemas de calidad en procesos productivos, administrativos o de servicio. Esta formación incluye competencias clave para mejorar la eficiencia organizacional y asegurar altos estándares según normativas como ISO 9001.

**Perfil del Técnico Egresado:**
- Implementa sistemas de gestión bajo estándares internacionales
- Aplica control estadístico de procesos
- Realiza auditorías internas con enfoque en mejora continua
- Está preparado para el desarrollo profesional y estudios universitarios

**Icono sugerido (lucide-react):** `Award` o `TrendingUp`

**Plan de estudios (2,840 horas totales):**

Décimo:
- Control y garantía de calidad: 16 hrs/sem, 640 hrs/año
- Sistemas modernos de manufactura, control y calidad: 4 hrs/sem, 160 hrs/año
- English Oriented to Quality Management: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Undécimo:
- Sistemas modernos de manufactura, control y calidad: 12 hrs/sem, 480 hrs/año
- Diagnóstico industrial: 8 hrs/sem, 320 hrs/año
- English Oriented to Quality Management: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Duodécimo:
- Sistemas modernos de manufactura, control y calidad: 12 hrs/sem, 300 hrs/año
- Diagnóstico industrial: 8 hrs/sem, 200 hrs/año
- English Oriented to Quality Management: 4 hrs/sem, 100 hrs/año
Total: 24 hrs/sem, 600 hrs/año

---

### 2. Banca y Finanzas

**Descripción:**
La especialidad de Banca y Finanzas prepara técnicos especializados en el sector financiero, con competencias sólidas en servicios bancarios, análisis crediticio y gestión de productos financieros. Esta formación brinda las bases para desarrollarte profesionalmente en uno de los sectores más estables del país.

**Perfil del Técnico Egresado:**
- Maneja servicios bancarios y productos financieros con excelencia
- Realiza análisis crediticio y evaluación de riesgos financieros
- Aplica normativas bancarias y cumplimiento regulatorio
- Está preparado para liderar en el sector financiero costarricense

**Icono sugerido:** `DollarSign` o `Landmark`

**Plan de estudios (2,840 horas totales):**

Décimo:
- Contabilidad de gestión y administración financiera: 12 hrs/sem, 480 hrs/año
- Gestión en tecnologías digitales financieras: 8 hrs/sem, 320 hrs/año
- English Oriented to Banking and Finance: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Undécimo:
- Gestión bancaria y de mercados financieros: 12 hrs/sem, 480 hrs/año
- Gestión de seguros: 8 hrs/sem, 320 hrs/año
- English Oriented to Banking and Finance: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Duodécimo:
- Gestión financiera y legislación: 12 hrs/sem, 300 hrs/año
- Gestión de pensiones: 8 hrs/sem, 200 hrs/año
- English Oriented to Banking and Finance: 4 hrs/sem, 100 hrs/año
Total: 24 hrs/sem, 600 hrs/año

---

### 3. Contabilidad y Control Interno

**Descripción:**
La especialidad de Contabilidad y Control Interno forma técnicos especializados en el registro, análisis, auditoría y control de operaciones financieras empresariales. Esta formación incluye dominio de normativas tributarias costarricenses y manejo de sistemas contables modernos para garantizar el éxito profesional.

**Perfil del Técnico Egresado:**
- Aplica principios contables y normativas fiscales costarricenses
- Elabora estados financieros y reportes contables precisos
- Maneja sistemas contables digitales y software especializado
- Está preparado para roles contables y de análisis financiero

**Icono sugerido:** `Calculator` o `FileSpreadsheet`

**Plan de estudios (2,840 horas totales):**

Décimo:
- Gestión contable y de control interno: 12 hrs/sem, 480 hrs/año
- Gestión en tecnologías digitales orientadas a la auditoría: 8 hrs/sem, 320 hrs/año
- English Oriented to Auditing: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Undécimo:
- Gestión contable y de control interno: 12 hrs/sem, 480 hrs/año
- Gestión empresarial para auditores: 8 hrs/sem, 320 hrs/año
- English Oriented to Auditing: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Duodécimo:
- Gestión contable y de control interno: 8 hrs/sem, 200 hrs/año
- Gestión en costos: 12 hrs/sem, 300 hrs/año
- English Oriented to Auditing: 4 hrs/sem, 100 hrs/año
Total: 24 hrs/sem, 600 hrs/año

---

### 4. Desarrollo de Aplicaciones de Software

**Descripción:**
La especialidad de Desarrollo de Aplicaciones de Software prepara técnicos especialistas en la creación de soluciones digitales innovadoras. Esta formación abarca desde programación móvil hasta aplicaciones de software completas, preparando profesionales para una industria tecnológica en constante expansión.

**Perfil del Técnico Egresado:**
- Desarrolla aplicaciones móviles nativas y multiplataforma
- Diseña interfaces de usuario atractivas y funcionales
- Maneja bases de datos y servicios web modernos
- Está preparado para la industria tecnológica en crecimiento

**Icono sugerido:** `Code` o `Smartphone`

**Plan de estudios (2,840 horas totales):**

Décimo:
- Tecnologías de la Información (TI) aplicada al desarrollo de aplicaciones móviles: 4 hrs/sem, 160 hrs/año
- Desarrollo de aplicaciones móviles y bases de datos: 8 hrs/sem, 320 hrs/año
- Soporte y seguridad de aplicaciones móviles: 8 hrs/sem, 320 hrs/año
- English Oriented to Apps Development: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Undécimo:
- Emprendimiento e innovación aplicada al desarrollo de aplicaciones móviles: 4 hrs/sem, 160 hrs/año
- Desarrollo de aplicaciones móviles y bases de datos: 8 hrs/sem, 320 hrs/año
- Soporte y seguridad de aplicaciones móviles: 8 hrs/sem, 320 hrs/año
- English Oriented to Apps Development: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Duodécimo:
- Desarrollo de aplicaciones móviles y bases de datos: 12 hrs/sem, 300 hrs/año
- Soporte y seguridad de aplicaciones móviles: 8 hrs/sem, 200 hrs/año
- English Oriented to Apps Development: 4 hrs/sem, 100 hrs/año
Total: 24 hrs/sem, 600 hrs/año

---

### 5. Construcción Civil

**Descripción:**
La especialidad de Construcción Civil forma técnicos especializados en supervisión, control y gestión de procesos constructivos. Esta formación incluye manejo de materiales, normativas de seguridad y tecnologías modernas para el sector de infraestructura y desarrollo urbano del país.

**Perfil del Técnico Egresado:**
- Supervisa procesos constructivos y control de calidad en obras
- Maneja materiales de construcción y técnicas especializadas
- Aplica normativas de seguridad ocupacional y ambiental
- Está preparado para liderar equipos en proyectos de infraestructura

**Icono sugerido:** `HardHat` o `Construction`

**Plan de estudios (1,260 horas totales - programa diferente):**

Décimo:
- Construcción de obras civiles: 12 hrs/sem, 480 hrs/año
- Presupuesto y herramientas informáticas de obras civiles: 6 hrs/sem, 240 hrs/año
- Dibujo técnico: 4 hrs/sem, 160 hrs/año
- English for communication: 2 hrs/sem, 80 hrs/año
Total: 24 hrs/sem, 480 hrs/año

Undécimo:
- Construcción de obras civiles: 12 hrs/sem, 480 hrs/año
- Presupuesto y herramientas informáticas de obras civiles: 6 hrs/sem, 240 hrs/año
- Dibujo técnico: 4 hrs/sem, 160 hrs/año
- English for communication: 2 hrs/sem, 80 hrs/año
Total: 24 hrs/sem, 480 hrs/año

Duodécimo:
- Construcción de obras civiles: 12 hrs/sem, 300 hrs/año
- Presupuesto y herramientas informáticas de obras civiles: 6 hrs/sem, 150 hrs/año
- Dibujo técnico: 4 hrs/sem, 100 hrs/año
- English for communication: 2 hrs/sem, 50 hrs/año
Total: 24 hrs/sem, 300 hrs/año

---

### 6. Dibujo y Modelado para Edificaciones

**Descripción:**
La especialidad de Dibujo y Modelado para Edificaciones forma técnicos especializados en diseño arquitectónico, modelado 3D y dibujo técnico. Esta formación combina herramientas CAD modernas con fundamentos de arquitectura y construcción para preparar profesionales en el sector de construcción.

**Perfil del Técnico Egresado:**
- Domina software CAD y herramientas de modelado 3D profesionales
- Crea planos arquitectónicos técnicos precisos y detallados
- Desarrolla modelos tridimensionales para proyectos de edificación
- Preparado para el área de arquitectura e ingeniería

**Icono sugerido:** `Ruler` o `PenTool`

**Plan de estudios (2,840 horas totales):**

Décimo:
- Modelado arquitectónico asistido por computadora: 12 hrs/sem, 480 hrs/año
- Técnicas de presentación y modelos: 4 hrs/sem, 160 hrs/año
- Dibujo y diseño arquitectónico y urbanístico: 4 hrs/sem, 160 hrs/año
- English Oriented to Drawing and Modeling of Buildings: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Undécimo:
- Modelado arquitectónico asistido por computadora: 12 hrs/sem, 480 hrs/año
- Dibujo y diseño arquitectónico y urbanístico: 4 hrs/sem, 160 hrs/año
- Emprendimiento e innovación aplicada al Dibujo y modelado para edificaciones: 4 hrs/sem, 160 hrs/año
- English Oriented to Drawing and Modeling of Buildings: 4 hrs/sem, 160 hrs/año
Total: 24 hrs/sem, 960 hrs/año

Duodécimo:
- Modelado arquitectónico asistido por computadora: 12 hrs/sem, 300 hrs/año
- Técnicas de presentación y modelos: 4 hrs/sem, 100 hrs/año
- Dibujo y diseño arquitectónico y urbanístico: 4 hrs/sem, 100 hrs/año
- English Oriented to Drawing and Modeling of Buildings: 4 hrs/sem, 100 hrs/año
Total: 24 hrs/sem, 600 hrs/año

---

## 📄 ESTRUCTURA DEL SITIO WEB

### Páginas/Secciones Principales

1. **Hero Section**
   - Título principal del colegio
   - Tagline: "Educación Técnica de Excelencia en Heredia"
   - CTAs: "Conocer Especialidades", "Contactar"

2. **Especialidades Section** (#especialidades)
   - Grid de 6 especialidades
   - Cada card con: icono, nombre, descripción corta, duración/modalidad
   - Botón "Ver Detalles" (puede abrir modal o expandir)

3. **Nosotros Section** (#nosotros)
   - Misión
   - Visión
   - (Separadas o en layout conjunto)

4. **Valores Section**
   - 5 categorías de valores
   - Layout: cards con iconos

5. **Contacto Section** (#contacto)
   - Información de contacto
   - Mapa embebido de Google Maps
   - Botones: Llamar, Email, Ver en Maps
   - Placeholder para horarios: [PENDIENTE]

6. **Header** (sticky)
   - Logo + nombre del colegio
   - Navegación: Inicio, Especialidades, Nosotros, Contacto
   - Mobile: Hamburger menu

7. **Footer**
   - Info del colegio
   - Enlaces rápidos
   - Contacto
   - Copyright

### Navegación
- Single-page con smooth scroll
- Anchors: #inicio, #especialidades, #nosotros, #contacto

---

## 📁 ESTRUCTURA DE ARCHIVOS

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

---

## 🎯 REGLAS CRÍTICAS

### 1. Diseño
- ✅ Sobrio y profesional, NO moderno ni llamativo
- ✅ Espacios blancos generosos
- ✅ Accesible para adultos mayores (35-60 años)
- ✅ Tipografía mínimo 16px
- ✅ Contraste WCAG AAA (7:1)
- ❌ NO animaciones excesivas
- ❌ NO efectos visuales complejos

### 2. Accesibilidad
- ✅ Botones mínimo 48x48px
- ✅ Touch targets espaciados (min 8px entre elementos)
- ✅ Keyboard navigation funcional
- ✅ Focus states visibles
- ✅ ARIA labels donde corresponda
- ✅ Semantic HTML

### 3. Responsive
- ✅ Mobile-first approach
- ✅ Breakpoints: 375px, 768px, 1024px, 1280px
- ✅ Verificar SIEMPRE en móvil
- ❌ NO scroll horizontal
- ❌ NO elementos cortados

### 4. TypeScript
- ✅ Strict mode
- ✅ TODO debe estar tipado
- ✅ Interfaces para todos los datos
- ❌ NO usar `any` (excepto justificado y documentado)

### 5. Datos
- ✅ Centralizar en src/data/
- ✅ Single source of truth
- ❌ NO hardcodear datos en componentes
- ❌ NO duplicar información

### 6. Naming Conventions
```typescript
// Componentes: PascalCase
HeroSection.tsx
SpecialtyCard.tsx

// Utilities: camelCase
formatPhone.ts
scrollToSection.ts

// Constants: SCREAMING_SNAKE_CASE
COLLEGE_INFO.ts
SPECIALTIES.ts

// Carpetas: kebab-case
contact-section/
specialty-cards/
```

### 7. Documentación Obligatoria
- ✅ Cada feature DEBE tener README.md
- ✅ Cada tarea completada DEBE tener LOG en docs/logs/
- ✅ LOGs deben incluir:
  - Objetivo
  - Implementación
  - Decisiones de diseño
  - Uso del componente (API/Props)
  - Dependencias
  - Testing manual realizado
  - Issues conocidos
  - Contexto para futuros agentes

---

## ⚠️ INFORMACIÓN PENDIENTE

### Datos que Serán Proporcionados Después:
1. **Horarios del colegio** - Pendiente del director
2. **Proceso de matrícula detallado** - Pendiente
3. **Fotos del colegio** - Pendiente para galería
4. **Logo en alta resolución** - Tenemos imagen pero verificar calidad

### Mientras Tanto:
Usar placeholders claros: `[PENDIENTE: Información del director]`

---

## ✅ CHECKLIST PRE-COMMIT

Antes de hacer commit, verificar:

### Funcionalidad
- [ ] Código funciona en mobile (375px) y desktop (1920px)
- [ ] No hay scroll horizontal en ninguna resolución
- [ ] Smooth scroll funciona correctamente
- [ ] Links/botones son clickeables y llevan a destino correcto
- [ ] No hay errores en consola del navegador
- [ ] No hay warnings de React/Next.js en terminal

### Diseño y Estilo
- [ ] Colores respetan paleta institucional (azul #002B7F, rojo #CE1126, dorado #FFD700)
- [ ] Textos legibles (contraste adecuado, min 16px)
- [ ] Espaciado consistente y generoso
- [ ] Tipografía sigue hierarchy (h1 > h2 > h3 > p)
- [ ] No hay elementos cortados o mal alineados
- [ ] Imágenes cargan correctamente
- [ ] Design se ve "sobrio" y profesional (no moderno/llamativo)

### Accesibilidad
- [ ] Botones y links tienen min 48x48px (touch-friendly)
- [ ] Contraste de texto cumple WCAG AA mínimo (4.5:1)
- [ ] Keyboard navigation funciona (Tab + Enter)
- [ ] Focus states son visibles
- [ ] ARIA labels presentes donde necesario
- [ ] Alt text en todas las imágenes
- [ ] Headings en orden correcto (no saltar niveles)

### TypeScript
- [ ] No hay errores de TypeScript
- [ ] No se usa `any` (o está justificado en comentario)
- [ ] Todas las props están tipadas
- [ ] Interfaces exportadas desde archivos correctos

### Datos y Contenido
- [ ] No hay datos hardcodeados en componentes
- [ ] Datos vienen de archivos en src/data/
- [ ] Información institucional es exacta (copy-paste de oficial)
- [ ] No se inventó contenido del colegio

### Estructura y Organización
- [ ] Naming conventions seguidas (PascalCase, camelCase, kebab-case)
- [ ] Archivos en carpetas correctas según estructura
- [ ] Imports organizados y sin duplicados
- [ ] No hay archivos temporales o de prueba

### Documentación
- [ ] README.md de la feature está creado/actualizado
- [ ] LOG de desarrollo está completo en docs/logs/
- [ ] Comentarios en código solo donde necesario (código debe ser self-explanatory)
- [ ] Props/API del componente documentadas en README

### Performance
- [ ] Imágenes optimizadas (next/image usado)
- [ ] No hay re-renders innecesarios
- [ ] CSS no tiene estilos duplicados o no usados
- [ ] Build production funciona (npm run build)

### Git
- [ ] Commit message sigue formato: [TIPO] Descripción
- [ ] Solo archivos relevantes incluidos (no node_modules, .env, etc)
- [ ] No hay console.logs olvidados
- [ ] No hay comentarios TODO sin resolver

---

## 🚨 SHOWSTOPPERS (NO hacer commit si falla)

Estos son críticos y DEBEN estar verificados:

1. ❌ Sitio no funciona en móvil → NO COMMIT
2. ❌ Información institucional incorrecta → NO COMMIT
3. ❌ Colores no son los institucionales → NO COMMIT
4. ❌ Errores de TypeScript → NO COMMIT
5. ❌ No hay LOG de la tarea → NO COMMIT
6. ❌ Botones muy pequeños (< 48px) → NO COMMIT
7. ❌ Contraste insuficiente (texto ilegible) → NO COMMIT

---

## 📝 FORMATO DE COMMIT MESSAGE

```bash
# Estructura:
[TIPO] Descripción clara y concisa

# Tipos válidos:
[FEAT]     # Nueva feature o sección
[FIX]      # Corrección de bug
[STYLE]    # Cambios de estilo/diseño (no afectan funcionalidad)
[REFACTOR] # Refactorización de código
[DOCS]     # Cambios en documentación
[PERF]     # Mejoras de performance
[TEST]     # Añadir o modificar tests
[BUILD]    # Cambios en build/dependencias

# Ejemplos buenos:
git commit -m "[FEAT] Añadir sección de especialidades con 6 cards"
git commit -m "[FIX] Corregir responsive de ContactSection en mobile"
git commit -m "[STYLE] Ajustar colores a paleta institucional en Hero"
git commit -m "[DOCS] Actualizar README de specialties section"

# Ejemplos malos:
git commit -m "cambios"
git commit -m "fix stuff"
git commit -m "work in progress"
```

---

## 🔍 TESTING RÁPIDO (Último Paso Antes de Commit)

1. **Abrir en navegador:**
   ```bash
   npm run dev
   ```

2. **Chrome DevTools - Mobile:**
   - F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Probar: iPhone SE (375px), iPad (768px), Desktop (1920px)
   - Verificar que TODO se ve bien

3. **Keyboard Navigation:**
   - Tab a través de todo el sitio
   - Enter en botones/links debe funcionar
   - Focus visible en todos los elementos

4. **Console Check:**
   - F12 → Console
   - No debe haber errores rojos
   - Warnings amarillos revisar (pueden ser OK)

5. **Build Test:**
   ```bash
   npm run build
   ```
   - Debe completar sin errores
   - Si falla, NO hacer commit

---

**Última actualización:** 2025-10-01  
**Versión:** 1.0
