let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.copy('src/*.html', 'dist/')
  .copyDirectory('src/img', 'dist/img/')
  //.copyDirectory('src/fonts', 'dist/fonts/')
  .babel([ //.scripts ***default without Babel convertation***
    'node_modules/svgxuse/svgxuse.js', //'npm install --save svgxuse'  SVG usage for IE11
    //'src/js/ssm.min.js', //for create breackpoints
    //'src/js/smooth-scroll.min.js', //smooth-scroll
    //'src/js/slick.min.js', //for Slick
    //'src/js/isotope.pkgd.min.js', //isotope
    'src/js/viewportchecker.js', //viewportchecker
    'src/js/script.js' //my scripts
  ], 'dist/js/script.js')
  //.sass('src/scss/style.scss', 'dist/css/')
  .less('src/less/style.less', 'dist/css')
  .browserSync({
    proxy: "",
    server: "dist",
    files: ["dist/css/**/*.css", "dist/js/**/*.js", 'dist/*.html']
  })
  .options({
    processCssUrls: false
  })
  .setPublicPath('dist');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });