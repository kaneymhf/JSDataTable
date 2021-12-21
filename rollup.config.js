import commonjs from "rollup-plugin-commonjs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/js/jsdatatables.js",
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      nodePolyfills(),
      babel(),
      terser(),
    ],
    // ES module version, for modern browsers with days split into separate file
    output: {
      dir: "dist/js/module",
      format: "es",
      sourcemap: true,
    },
  },
  {
    input: "src/js/jsdatatables.js",
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      nodePolyfills(),
      babel(),
      terser(),
    ],
    // SystemJS version, for older browsers
    output: {
      dir: "dist/js/nomodule",
      format: "system",
      sourcemap: true,
    },
  },
  {
    input: "src/js/jsdatatables.js",
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      nodePolyfills(),
      babel(),
      terser(),
    ],
    // CJS version
    output: {
      dir: "dist/js",
      format: "cjs",
      sourcemap: true,
    },
  },
];
