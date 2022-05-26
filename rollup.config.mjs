import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { swc } from 'rollup-plugin-swc3';

export default [
  {
    input: "index.js",
    output: {
      file: "dist/index.js",
      format: "iife",
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      swc({
          jsc: {
              externalHelpers: true
          }
      })
    ],
  },
  {
    input: "plugin.js",
    output: {
      file: "dist/plugin.js",
      format: "iife",
      globals: {
        "@swc/helpers": "swcHelpers"
      }
    },
    plugins: [
        swc({
            jsc: {
                externalHelpers: true
            }
        })
    ]
  },
];
