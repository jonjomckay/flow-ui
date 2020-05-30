import styles from "rollup-plugin-styles";
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import ts from "@wessberg/rollup-plugin-ts";

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            entryFileNames: '[name].[format].js',
            format: 'cjs',
            sourcemap: true
        },
        {
            dir: 'dist',
            entryFileNames: '[name].[format].js',
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
        styles({
            // Required for Ant Design
            less: {
                javascriptEnabled: true
            }
        }),
        ts()
    ]
}
