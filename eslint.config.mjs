import js from "@eslint/js";
import globals from "globals";

export default [
  {
    // Aplica a todos los archivos .js
    ...js.configs.recommended, // Fusiona las reglas recomendadas
    files: ["**/*.js"],
    languageOptions: {
      // Define las variables globales para el entorno de Node.js
      globals: {
        ...globals.node,
      },
    },
  },
  {
    // Aplica solo a los archivos de prueba
    files: ["tests/**/*.test.js"],
    languageOptions: {
      globals: { ...globals.jest }, // Define las globales de Jest (test, expect, etc.)
    },
  },
];
