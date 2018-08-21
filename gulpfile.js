/**
 * Created by lamho on 2017/5/6.
 */
const gulp = require( 'gulp' );
const babel = require( 'gulp-babel' );
const sass = require( 'gulp-sass' );
const through2 = require( 'through2' );
const ts = require( 'gulp-typescript' );

function transformJSStaticSCSSToCss() {
    return through2.obj( function ( file, encoding, cb ) {
        // 如果文件为空，不做任何操作，转入下一个操作，即下一个pipe
        if ( file.isNull() ) {
            this.push( file );
            return cb();
        }

        // 插件不支持对stream直接操作，抛出异常
        if ( file.isStream() ) {
            this.emit( 'error' );
            return cb();
        }

        let content = file.contents.toString( encoding );
        content = content.replace( /\.jsx/g, '.js' ).replace( /\.scss/g, '.css' );
        file.contents = Buffer.from( content );
        // 下面这两句基本是标配，可参考through2的API
        this.push( file );
        cb();
        return false;
    } );
}

gulp.task( 'compile', function () {
    gulp.src( ['./es/**/*.jsx', './es/**/*.js', '!./components/**/*.test.js'], { base: './es' } )
        .pipe( babel( {
            presets: ['es2015', 'react', 'stage-2']
        } ) )
        .pipe( transformJSStaticSCSSToCss() )
        .pipe( gulp.dest( 'lib' ) );

    gulp.src( './es/**/*.css', { base: './es' } )
        .pipe( sass() )
        .pipe( gulp.dest( 'lib' ) );

    gulp.src( './es/**/*.svg', { base: './es' } )
        .pipe( gulp.dest( 'lib' ) );
} );

gulp.task( 'build', function () {
    gulp.src( ['./components/**/*.jsx', './components/**/*.js', '!./components/**/*.test.js'], { base: './components' } )
        .pipe( babel( {
            presets: ['es2015', 'react', 'stage-2']
        } ) )
        .pipe( transformJSStaticSCSSToCss() )
        .pipe( gulp.dest( 'es' ) );

    gulp.src( ['./components/**/*.tsx', './components/**/*.ts'], { base: './components' } )
        .pipe( ts( {
            declaration: true,
            strictNullChecks: true, // 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）
            moduleResolution: 'node', // 决定如何处理模块。或者是 "Node"对于Node.js/io.js，或者是 "Classic"（默认）。查看 模块解析了解详情。
            jsx: 'preserve', // 在 .tsx文件里支持JSX： "React"或 "Preserve"。
            noUnusedParameters: true, // 若有未使用的参数则抛错。
            noUnusedLocals: true, // 若有未使用的局部变量则抛错。
            noEmitOnError: false, // 报错不生成代码
            allowSyntheticDefaultImports: true, // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
            target: 'es6',
            outDir: './es',
            types: [
                'classnames',
                'react',
                'react-dom'
            ]
        } ) )
        .pipe( transformJSStaticSCSSToCss() )
        .pipe( gulp.dest( 'es' ) );

    gulp.src( './components/**/*.scss', { base: './components' } )
        .pipe( sass() )
        .pipe( gulp.dest( 'es' ) );

    gulp.src( './components/**/*.svg', { base: './components' } )
        .pipe( gulp.dest( 'es' ) );
} );

gulp.task( 'watch', function () {
    gulp.watch( ['!./components/**/*.test.js', './components/**/*.tsx', './components/**/*.ts', './components/**/*.jsx', './components/**/*.js', './components/**/*.scss', './components/**/*.svg'], ['build'] );
} );