import json from "rollup-plugin-json";
export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "umd",
  },
  plugins: [json()],
};
