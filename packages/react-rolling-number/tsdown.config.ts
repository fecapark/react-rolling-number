import type { UserConfig } from 'tsdown';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsdown';

const importBuiltCSS = {
  esm: "import './index.css'",
  cjs: "require('./index.css')",
};

const defaultConfig: UserConfig = {
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  minify: true,
  sourcemap: false,
  plugins: [vanillaExtractPlugin()],
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
