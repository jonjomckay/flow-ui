import pkg from './package.json';
import styles from "rollup-plugin-styles";
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import ts from "@wessberg/rollup-plugin-ts";

export default {
    cache: true,
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true,
            extensions: ['.js', '.ts', '.tsx']
        }),
        commonjs({
            include: /node_modules/,
        }),
        styles(),
        ts()
    ]
}
