import pkg from './package.json';
import styles from 'rollup-plugin-styles';
import analyze from 'rollup-plugin-analyzer';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const isProduction = process.env.NODE_ENV === 'production';

const config = [
    {
        cache: true,
        input: 'src/index.ts',
        output: [
            isProduction && {
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
            isProduction && analyze({
                summaryOnly: true
            }),
            peerDepsExternal(),
            // TODO: Remove these next two, and replace axios with fetchWrapper
            resolve({
                browser: true,
                extensions: ['.js', '.ts', '.tsx']
            }),
            commonjs({
                include: /node_modules/,
            }),
            styles(),
            esbuild({
                watch: !!process.env.ROLLUP_WATCH,
                minify: process.env.NODE_ENV === 'production',
                target: 'es6' // This is duplicated here, as rollup-plugin-esbuild doesn't use the merged tsconfig.json
            }),
        ]
    }
];

if (isProduction) {
    config.push({
        cache: true,
        input: 'src/index.ts',
        output: [
            {
                file: pkg.types,
                format: 'es'
            }
        ],
        plugins: [
            dts()
        ],
    });
}

export default config;
