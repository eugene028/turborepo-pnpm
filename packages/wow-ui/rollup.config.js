import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'
import ts from 'rollup-plugin-ts'
import babel from '@rollup/plugin-babel';


export default [{
        input: 'src/index.ts',
        output: {
            dir: 'dist'
        // name: 'index',
        // file: pkg.main,
        // format: 'umd'
    },
    external: [ 'react', 'react-is', 'react-router', 'react/jsx-runtime' ],
    plugins: [
        external(),
        ts(),
        resolve(),
        // babel(),
        commonjs(),
    ],
    // external: [
    //     'react',
    //     'prop-types',
    // ],
    // globals: {
    //     react: "React"
    // }
},
];