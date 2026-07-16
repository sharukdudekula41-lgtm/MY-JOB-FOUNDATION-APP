import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/layouts": path.resolve(__dirname, "./src/layouts"),
      "@/context": path.resolve(__dirname, "./src/context"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,

    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
});