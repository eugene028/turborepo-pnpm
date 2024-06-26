import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'
import ts from 'rollup-plugin-ts'
import typescript from "rollup-plugin-typescript2";
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';


export default [{
        input: 'src/index.ts',
        output: {
            dir: 'dist',
    },
    external: [ 'react', 'react-is', 'react-router', 'react/jsx-runtime' ],
    plugins: [
        PeerDepsExternalPlugin(),
        external(),
        ts(),
        resolve(),
        commonjs(),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                declaration: true,
                declarationDir: './dist'
                }
            },
            rollupCommonJSResolveHack: true,
            clean: true
        }),
    ],
},
];