import { defineConfig, loadEnv } from "vite"; // https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
  };
});
