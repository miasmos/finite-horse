'use strict'
let gulp = require('gulp'),
	flatten = require('gulp-flatten'),
	zip = require('gulp-zip')

let paths = ['app/images/**/*', 'app/manifest.json', 'app/*.js', 'app/*.html']
gulp.task('default', ['watch', 'build'], () => {})

gulp.task('build', () => {
	gulp.src(paths)
		.pipe(flatten())
		.pipe(gulp.dest('build'))
})

gulp.task('watch', () => {
	gulp.watch(paths, ['build'])
})

gulp.task('package', () => {
	gulp.src('build/*')
		.pipe(zip('release.zip'))
		.pipe(gulp.dest('release'))
})