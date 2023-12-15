/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { REPO_BASE_NAME } from "./src/constants/basename";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: REPO_BASE_NAME,
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/pages/index/index.html"),
        "coworking-space": path.resolve(
          __dirname,
          "src/pages/coworking-space/index.html"
        ),
      },
    },
  },
});
