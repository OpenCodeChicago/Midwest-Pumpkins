import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import path from "path";

export default defineConfig({
  root: "src",
  base: "/Midwest-Pumpkins/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
      },
    },
    outDir: path.resolve(__dirname, "dist"),
    cssCodeSplit: true,
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    injectHTML(),
    FullReload(["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"]),
  ],
});
