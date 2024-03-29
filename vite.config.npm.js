import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import path from "path";

export default defineConfig({
  build: {
    outDir: "designsystem",
    lib: {
      entry: path.resolve(__dirname, "designsystem.js"),
      name: "DesignSystem",
      fileName: "designsystem",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [],
  publicDir: false,
});
