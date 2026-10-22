import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // This repository is deployed at https://krostymall.github.io/Landing-SENSORITY/
  base: "/Landing-SENSORITY/",
  plugins: [react(), tailwindcss()],
  build: {
    // "source.html" is the editable Vite entry; output is still dist/index.html.
    // The root index.html is the compiled site consumed by GitHub Pages' branch source.
    rollupOptions: {
      input: { index: resolve(rootDir, "source.html") },
    },
  },
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
