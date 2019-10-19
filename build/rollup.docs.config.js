import babel from 'rollup-plugin-babel';

export default {
    input: 'docs/assets/src/js/main.js',
    output: {
        file: 'docs/assets/dist/js/main.js',
        name: 'simpleSnackbar-docs',
        format: 'iife',
        sourceMap: 'inline',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};
