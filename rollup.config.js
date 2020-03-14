import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript'
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
      prettier({
        tabWidth: 2,
        singleQuote: false,
        parser: 'babel',
      }),
      typescript(),
      // Run plugin with prettier options.
    ],
  },
]
