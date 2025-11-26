import type { Options } from 'tsup';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsup';

const importBuiltCSS = {
  esm: "import './index.css'",
  cjs: "require('./index.css')",
};

const defaultConfig: Options = {
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  minify: true,
  sourcemap: false,
  esbuildPlugins: [vanillaExtractPlugin()],
};

export default defineConfig([
  {
    ...defaultConfig,
    format: 'cjs',
    outDir: 'dist',
    banner: {
      js: importBuiltCSS.cjs,
    },
  },
  {
    ...defaultConfig,
    format: 'esm',
    outDir: 'esm',
    banner: {
      js: importBuiltCSS.esm,
    },
  },
]);
