// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { componentTagger } from "lovable-tagger"

export default defineConfig(({ mode }) => ({
  base: "./",                // ← emit relative URLs for all assets
  build: { outDir: "dist" },
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}))
