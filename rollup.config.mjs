import dts from "rollup-plugin-dts";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
/** @type {import('rollup-plugin-swc3').PluginOptions} */
const swcPluginConfig = {
  sourceMaps: true,
  jsc: {
    target: "es2022",
  },
};
/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "src/index.ts",
    external: ["react/jsx-runtime"],
    output: [
      {
        file: "dist/main.js",
        format: "umd",
        sourcemap: true,
        name: "B12-umd",
        globals: {
          "react/jsx-runtime": "jsxRuntime",
        },
      },
      {
        file: "dist/module.js",
        format: "es",
        sourcemap: true,
        name: "B12-esm",
      },
    ],
    plugins: [swc(defineRollupSwcOption(swcPluginConfig))],
    watch: {
      include: ["src/**", "rollup.config.js", "package.json", "tsconfig.json"],
      exclue: ["node_modules/**"],
    },
  },
  {
    input: "./src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
export default config;
