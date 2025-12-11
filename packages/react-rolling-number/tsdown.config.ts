import type { UserConfig } from 'tsdown';

import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown';

const CSS_FILENAME = 'index.css';

// Plugin to remove vanilla-extract CSS imports from bundled output
const removeVanillaCssImportsPlugin = () => ({
  name: 'remove-vanilla-css-imports',
  renderChunk(code: string) {
    return code
      .replace(/import\s*["'][^"']*\.vanilla\.css["'];?\n?/g, '')
      .replace(/require\s*\(\s*["'`][^"'`]*\.vanilla\.css["'`]\s*\)\s*;?\n?/g, '');
  },
});

const defaultConfig: UserConfig = {
  entry: ['src/index.ts'],
  dts: true,
  minify: true,
  sourcemap: false,
  outputOptions: {
    assetFileNames: CSS_FILENAME,
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
      extract: {
        name: CSS_FILENAME,
        sourcemap: false,
      },
    }),
    removeVanillaCssImportsPlugin(),
  ],
};

export default defineConfig([
  {
    ...defaultConfig,
    format: 'cjs',
    outDir: 'dist',
    banner: `require("./${CSS_FILENAME}");`,
  },
  {
    ...defaultConfig,
    format: 'esm',
    outDir: 'esm',
    fixedExtension: false,
    banner: `import "./${CSS_FILENAME}";`,
  },
]);
