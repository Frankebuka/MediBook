import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://medibook-1.netlify.app/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
