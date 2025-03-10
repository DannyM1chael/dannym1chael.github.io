import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        format: "es",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react-router-dom") ||
              id.includes("react-router")
            ) {
              return "router";
            }
            if (
              id.includes("react-transition-group") ||
              id.includes("react-scroll")
            ) {
              return "animations";
            }
            if (id.includes("tailwind")) return "tailwind";
            if (id.includes("zod")) return "validation";
            if (id.includes("tech-stack-icons")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3001,
    strictPort: true,
    host: true,
  },
});
