import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: true,                     // permite acesso externo
    port: 8080,                     // porta que o EasyPanel usará
    allowedHosts: ["https://site-mnebi01vr1.snnxl0.easypanel.host/"], // <<< IMPORTANTE
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
