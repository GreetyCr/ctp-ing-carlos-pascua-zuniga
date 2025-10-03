# Reglas del Proyecto - CTP Ing. Carlos Pascua Zúñiga

Este documento contiene las reglas críticas que todos los desarrolladores deben seguir al trabajar en este proyecto.

## 🚨 Reglas Críticas

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

## 🚨 SHOWSTOPPERS (NO hacer commit si falla)

Estos son críticos y DEBEN estar verificados:

1. ❌ Sitio no funciona en móvil → NO COMMIT
2. ❌ Información institucional incorrecta → NO COMMIT
3. ❌ Colores no son los institucionales → NO COMMIT
4. ❌ Errores de TypeScript → NO COMMIT
5. ❌ No hay LOG de la tarea → NO COMMIT
6. ❌ Botones muy pequeños (< 48px) → NO COMMIT
7. ❌ Contraste insuficiente (texto ilegible) → NO COMMIT
