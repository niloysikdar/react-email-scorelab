import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts'],
  output: {
    dir: './dist/',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [Ts()],
  external: ['react', 'react/jsx-runtime', 'react-dom/server', 'textversionjs'],
};
