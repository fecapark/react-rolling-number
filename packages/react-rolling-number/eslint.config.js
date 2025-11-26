import workspaceEslintConfig from '@react-rolling-number/eslint-config';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  extends: [workspaceEslintConfig, reactRefresh.configs.recommended],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
});
