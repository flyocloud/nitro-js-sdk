import { defineConfig } from "vite";
import path from "path";

const name = "nitro-js";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.js"),
        name: "flyoNitroJs",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    },
  };
});
