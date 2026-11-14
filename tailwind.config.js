/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Inclui todos os diretórios com componentes e telas do projeto
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#27D9A7",
          light: "#F2FBF8",
        },
        navy: {
          800: "#16263B",
          900: "#0B192C",
        },
        surface: {
          light: "#FFFFFF",
          card: "#F8FAFC",
        },
        text: {
          muted: "#64748B",
          "light-muted": "#94A3B8",
        },
        // Atalhos adicionais para facilitar o uso direto
        "primary-light": "#F2FBF8",
        "navy-800": "#16263B",
        "navy-900": "#0B192C",
        "surface-light": "#FFFFFF",
        "surface-card": "#F8FAFC",
        "text-muted": "#64748B",
        "text-light-muted": "#94A3B8",
      },
    },
  },
  plugins: [],
};
