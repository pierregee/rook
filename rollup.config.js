import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import prettier from 'rollup-plugin-prettier'
import packageJSON from './package.json'

export default [
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
    plugins: [
      external(),
      resolve(),
      typescript({}),
      prettier({
        tabWidth: 2,
        singleQuote: false,
        parser: 'babel',
      }),
      // Run plugin with prettier options.
    ],
  },
]
