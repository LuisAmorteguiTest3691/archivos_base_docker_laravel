const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); // plugin 

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
        require('tailwindcss'),
        require('autoprefixer'),
    ]);


    mix.webpackConfig({
        plugins: [
            new BrowserSyncPlugin({
                proxy: 'http://localhost:8081/', // Cambia este puerto por el de tu servidor Docker (ej. 8081)
                files: [
                    'public/**/*.*',
                    'resources/views/**/*.php',
                    'resources/js/**/*.js',
                    'resources/css/**/*.css'
                ],
                open: false,
                notify: false
            })
        ]
    });
