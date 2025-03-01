const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                    mangle: true,
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
}; 