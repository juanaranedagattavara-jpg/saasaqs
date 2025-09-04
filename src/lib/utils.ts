import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Design System Utilities
export const designTokens = {
  colors: {
    bg: "#0b0f14",
    panel: "#10161e", 
    ink: "#e9eef5",
    muted: "#9fb1c4",
    brand: "#00c2b8",
    accent: "#d4a253",
  },
  shadows: {
    soft: "0 10px 25px rgba(0,0,0,.35)",
  },
  borders: {
    default: "#1b2736",
  },
  radius: {
    "2xl": "1rem",
  }
} as const

// Utility classes for consistent design
export const utilityClasses = {
  card: "bg-slate-900 border border-slate-700 rounded-2xl shadow-lg",
  panel: "bg-slate-800 border border-slate-700 rounded-2xl shadow-lg",
  button: {
    primary: "bg-cyan-500 text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-full px-4 py-2 font-semibold transition-all duration-200",
    secondary: "bg-secondary text-secondary-foreground border border-border hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full px-4 py-2 font-semibold transition-all duration-200",
    ghost: "bg-slate-800 text-slate-100 border border-slate-600 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-full px-4 py-2 font-semibold transition-all duration-200",
  },
  focus: {
    visible: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  },
  text: {
    heading: "font-semibold tracking-tight text-foreground",
    body: "text-foreground leading-relaxed",
    muted: "text-muted-foreground",
  }
} as const

// Accessibility helpers
export const a11y = {
  srOnly: "sr-only",
  focusRing: "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-background",
  skipLink: "absolute -top-10 left-6 bg-cyan-500 text-black px-4 py-2 rounded-md z-50 focus:top-6 transition-all duration-200",
} as const

// Layout helpers
export const layout = {
  container: "max-w-6xl mx-auto px-6",
  section: "py-20",
  grid: {
    "2": "grid grid-cols-1 md:grid-cols-2 gap-8",
    "3": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    "4": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  }
} as const