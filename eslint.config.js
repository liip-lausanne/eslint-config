import globals from 'globals';
import config from './index.js';

export default [
  config,
  {
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
