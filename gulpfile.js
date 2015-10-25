"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');  //run local dev server
var browserify = require('browserify');  //bundle js
var open = require('gulp-open'); // Open url in browser
var concat = require('gulp-concat'); // concatenates files
var eslint = require('gulp-eslint'); // lint the files
var source = require('vinyl-source-stream'); // Use conventional text streams to Gulp 
var reactify = require('reactify');

var karma = require('karma').server;

var config = {
	port: 8002,
	devBaseUrl: 'http://localhost',
	connect: {
		dev: 'src',
		prod: 'dist',
		browser: 'chrome' //firefox
	},
	paths: {
		html: './src/*.html',
		js: './src/**/**/*.js',
		dist: './dist',
		css: './src/**/*.css',
		mainJS: './src/main.js',
		images: './src/images/*'
	}
};

gulp.task('connectDist', function () {
  connect.server({
    root: config.connect.prod,
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, function() {
        done();
    });
});

// first run connect before running open, opens server in browser
gulp.task('open', ['connectDist'], function() {
	gulp.src(config.connect.prod +'/index.html')
		.pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));

});

gulp.task('html', function() {
	gulp.src(config.paths.html)
	    .pipe(gulp.dest(config.paths.dist))
    	.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJS)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});


gulp.task('lint', function(){
	return gulp.src(config.paths.js)
			.pipe(eslint())		
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  gulp.watch([config.paths.html], ['html']);
  gulp.watch([config.paths.css], ['css']);
  gulp.watch([config.paths.js], ['js', 'lint']);
});


gulp.task('default', ['html', 'css', 'js', 'lint', 'open', 'watch']);