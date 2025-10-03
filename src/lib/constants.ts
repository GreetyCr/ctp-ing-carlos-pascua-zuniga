// Constantes del proyecto CTP Ing. Carlos Pascua Zúñiga

export const BREAKPOINTS = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
  large: "1280px"
} as const;

export const SPACING = {
  mobile: "16px", // px-4
  tablet: "24px", // px-6
  sectionMobile: "48px", // py-12
  sectionDesktop: "80px" // py-20
} as const;

export const TOUCH_TARGETS = {
  minSize: "48px", // 48x48px mínimo
  padding: "px-6 py-3",
  borderRadius: "rounded-lg" // 8px
} as const;

export const COLORS = {
  primary: {
    blue: "#002B7F",
    red: "#CE1126",
    white: "#FFFFFF",
    gold: "#FFD700"
  },
  secondary: {
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray600: "#4B5563",
    gray900: "#111827"
  }
} as const;

export const TYPOGRAPHY = {
  baseSize: "16px", // Mínimo según especificaciones
  lineHeight: "1.6",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
} as const;

export const ACCESSIBILITY = {
  contrastRatio: "7:1", // WCAG AAA
  focusOutline: "2px solid var(--ctp-blue)",
  focusOffset: "2px"
} as const;
