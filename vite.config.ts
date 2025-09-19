import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Corrige o dirname (não existe em ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // removi o componentTagger pq só funciona no Lovable
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
