import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import workspaceEslintConfig from '@react-rolling-number/eslint-config';
import reactRefresh from 'eslint-plugin-react-refresh';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    extends: [workspaceEslintConfig, reactRefresh.configs.next],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, allowExportNames: ['metadata'] }, // allow metadata export in Next.js
      ],
    },
  },
]);

export default eslintConfig;
