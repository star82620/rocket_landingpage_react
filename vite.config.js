import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { REPO_BASE_NAME } from "./src/constants/basename";

export default defineConfig({
  plugins: [react()],
  base: REPO_BASE_NAME,
});
