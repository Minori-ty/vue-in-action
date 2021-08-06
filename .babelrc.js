module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@vue/babel-preset-jsx',
        '@babel/preset-react',
    ],
    plugins: ['@babel/plugin-syntax-jsx', 'transform-remove-console'],
}
