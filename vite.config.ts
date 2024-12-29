import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const VitePWAOptions: { [key: string]: unknown } = {
  strategies: "generateSW",
  registerType: "autoUpdate",
  includeAssets: ["favicon.png", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    id: "/",
    start_url: "/",
    name: "Latinsoft SpA v2025",
    short_name: "Latinsoft APP",
    description: "LatinSOFT SpA - Desarrollo e Investigación.",
    theme_color: "#2E86C1",
    background_color: "#2E86C1",
    display: "standalone",
    display_override: ["window-controls-overlay", "fullscreen", "minimal-ui"],
    lang: "es",
    icons: [
      {
        src: "/icons/96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icons/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/wide/001.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshots/narrow/001.png",
        sizes: "408x877",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /\/assets\//, // Rutas a cachear (puedes usar expresiones regulares)
        handler: "CacheFirst", // Estrategia: usa la caché primero
        options: {
          cacheName: "assets-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(VitePWAOptions)],
});
