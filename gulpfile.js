// require gulp
var gulp = require('gulp');
// require gulp-watch for watch script
var watch = require('gulp-watch');
// require gulp-sass for sass compile
var sass = require('gulp-sass');

// set sass input and output directories
var input = 'src/sass/**/*.scss';
var output = 'src/css';

// sass options 
var sassOptions = {
	errLogtoConsole:true,
	outputStyle: 'expanded'
}

// sass compiler
gulp.task('sass', function(){
	return gulp.src(input)
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(replace('{timestamp}', (new Date()).toString().substr(4,17)))
	.pipe(gulp.dest(output));
});

// sass watch. any change in .scss file will trigger compile
gulp.task('sass-watch', function(){
	return gulp.watch(input, ['sass'])
	.on('change', function(event){
		console.log('file ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['sass', 'sass-watch'], function(){
	console.log('Sass compiled and watch script activated!');
});