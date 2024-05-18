import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "https://medi-book-2-irf2kcrlu-franks-projects-530fd17a.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
