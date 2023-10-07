import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { globSync } from 'glob';
import type { RollupOptions } from 'rollup';

const plugins = [
  resolve({
    extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
  }),
  babel({
    babelHelpers: 'bundled',
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.cjs', '.ts'],
  }),
];

export default [
  ...['src/index.ts', ...globSync('src/*/index.ts')].map(
    path =>
      ({
        input: path,
        output: {
          file: `${path.replace('src/', 'dist/').replace('.ts', '.js')}`,
          format: 'esm',
        },
        plugins,
      }) as RollupOptions,
  ),
  ...['src/cdn.ts', ...globSync('src/*/cdn.ts')].map(
    path =>
      ({
        input: path,
        output: {
          file: `${path.replace('src/', 'dist/').replace('.ts', '.min.js')}`,
          format: 'umd',
          sourcemap: true,
        },
        plugins: [...plugins, terser()],
      }) as RollupOptions,
  ),
];
