import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV || 'development'

const config = {
  entry: 'src/index.jsx',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    resolve(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    env === 'production' && uglify()
  ]
}

export default config
