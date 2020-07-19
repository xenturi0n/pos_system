const path = require("path");
const glob = require("glob");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');

const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, "assets/src"),
    dist: path.resolve(__dirname, "assets/dist")
};

var config = {
    watchOptions: {
        ignored:[/node_modules/]
    },
    entry: {
        styleVendor: path.resolve(PATHS.src, 'scss/styleVendor.scss'),
        styleLocal: path.resolve(PATHS.src, 'scss/styleLocal.scss'),
        app: path.resolve(PATHS.src, 'js/app.js')
    },
    output:{
        path: PATHS.dist,        
        filename: 'js/[name].[hash].js'
        //publicPath: '/',
    },
    module:{
        rules: [{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[{
                loader: "file-loader",
                options: {
                    outputPath: "fonts/",
                    name: "[name].[contenthash].[ext]",
                    esModule: false
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),        
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "test_compilado.php"),
            template: path.resolve(__dirname, 'templates/test.php'),
            excludeAssets: [/styleVendor.*.js/, /styleLocal.*.js/],
            minify: false,
            inject: true
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ]
}

module.exports = (env, argv) => {    

    // watchOptions: {
    //     ignored: /node_modules/
    // };

    // ***** MODO DESARROLLO *****
    if (argv.mode === 'development'){
        config.mode = 'development';
        config.devtool = 'source-map';

        const sass = {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader"]
        };

        const images = {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "images/",
                    name: "[name].[contenthash].[ext]",
                    esModule: false
                }
            }]
        };
        
        config.module.rules.push(sass, images);
    }    


    // ***** MODO PRODUCCION *****

    // if (argv.mode === 'production') {
    //     config.mode = 'production';
        
    //     const sass = {
    //         test: /\.(css|scss)$/,
    //         use: [
    //             MiniCSSExtractPlugin.loader,
    //             {
    //                 loader: "css-loader",
    //                 options: {
    //                     importLoaders: 1
    //                 }
    //             },
    //             {
    //                 loader: "postcss-loader",
    //                 options: {
    //                     plugins: () => [
    //                         postcssPresetEnv({
    //                             stage: 3,
    //                             browsers: "last 2 versions",
    //                             autoprefixer: true,
    //                             preseve: true
    //                         })
    //                     ]
    //                 }
    //             },
    //             "resolve-url-loader",
    //             "sass-loader"
    //         ]
    //     }

    //     const images = {
    //         test: /\.(png|svg|jpg|gif)$/,
    //         use: [{
    //                 loader: "file-loader",
    //                 options: {
    //                     outputPath: "dist/images/",
    //                     name: "[name].[contenthash].[ext]",
    //                     esModule: false
    //                 }
    //             },
    //             {
    //                 loader: "image-webpack-loader",
    //                 options: {
    //                     mozjpeg: {
    //                         progressive: true,
    //                         quality: 65
    //                     },
    //                     // optipng.enabled: false will disable optipng
    //                     optipng: {
    //                         enabled: false
    //                     },
    //                     pngquant: {
    //                         quality: [0.65, 0.9],
    //                         speed: 4
    //                     },
    //                     gifsicle: {
    //                         interlaced: false
    //                     },
    //                     // the webp option will enable WEBP
    //                     webp: {
    //                         quality: 75
    //                     }
    //                 }
    //             }
    //         ]
    //     }

    //     config.module.rules.push(sass, images);

    //     config.optimization = {
    //         minimize: true,
    //         minimizer: [
    //             new TerserJSPlugin({}),
    //             new OptimizeCSSAssetsPlugin({
    //                 cssProcessor: require("cssnano"),
    //                 cssProcessorPluginOptions: {
    //                     preset: ["default", {
    //                         discardComments: {
    //                             removeAll: true
    //                         }
    //                     }]
    //                 },
    //                 canPrint: true
    //             })
    //         ]
    //     }

    //     // config.plugins.unshift(new PurgecssPlugin({
    //     //     paths: () => glob.sync(`${PATHS.src}/**/*`, {
    //     //         nodir: true
    //     //     })
    //     // }));

    // };

    return config;
}