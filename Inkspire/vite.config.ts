import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes("node_modules")) {
  //           return "vendors"; // all modules from node_modules are moved to the vendors chunk
  //         }
  //       },
  //     },
  //   },
  // },
  server: { host: "0.0.0.0" },
  plugins: [react(), typescript()],
});
