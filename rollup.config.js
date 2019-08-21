import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";
import dotenv from "dotenv";

const production = !process.env.ROLLUP_WATCH;

if (!production) {
  dotenv.config();
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js",
  },
  plugins: [
    replace({
      ENV_API_HOST: process.env.API_HOST,
      ENV_API_WS_GAME_HOST: process.env.API_WS_GAME_HOST,
      // a minimatch pattern, or array of patterns, of files that
      // should be processed by this plugin (if omitted, all files
      // are included by default)
      include: "src/config.js",
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we"ll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write("public/bundle.css");
      },
    }),

    // If you have external dependencies installed from
    // npm, you"ll most likely need these plugins. In
    // some cases you"ll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({ browser: true }),
    commonjs(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we"re building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
