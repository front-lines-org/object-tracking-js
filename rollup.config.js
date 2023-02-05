import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/index.js',
    plugins: [
      // resolve(),
      commonjs(),
    ],
    output: {
      format: 'umd',
      name: 'objectTracker',
      file: 'dist/object-tracking.js'
    }
  },
  {
    input: 'src/index.js',
    plugins: [
      // resolve(),
      commonjs(),
      // uglify()
    ],
    output: {
      format: 'umd',
      name: 'objectTracker',
      file: 'dist/object-tracking.min.js'
    }
  }
]
