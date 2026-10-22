import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // This repository is deployed at https://krostymall.github.io/Landing-SENSORITY/
  // Keep the project path explicit so GitHub Pages can always resolve JS, CSS and fonts.
  base: "/Landing-SENSORITY/",
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
});
