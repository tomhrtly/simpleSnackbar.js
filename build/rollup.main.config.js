import babel from 'rollup-plugin-babel';

export default {
    input: 'src/simpleSnackbar.js',
    output: {
        file: 'dist/simpleSnackbar.js',
        name: 'simpleSnackbar',
        format: 'iife',
        sourceMap: 'inline',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};
