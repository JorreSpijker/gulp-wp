///////////////////
// Version 1.0.0 //
///////////////////

/// CONFIG ///

var theme_name = "test"; // This is the name of your theme
var project_name = "test"; // This is the name of your wordpress project. It needs to be equal to the 'Local' folder where wordpress is installed.

/// VARIABLES ///

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

var location_wp = "local-sites/" + project_name + "/app/public/wp-content/themes/" + theme_name;
var location_build = "build";
var version = "1.0.0";

/// TASKS ///

gulp.task('default', function(){
	console.log(" ");
	console.log("  Theme: " + theme_name );
	console.log(" ");
	console.log("  gulp build  │  Compile all files to /build/");
	console.log("  gulp sass   │  Compile sass files to /build/");
	console.log("  gulp php    │  Compile php files to /build/");
	console.log("  gulp clean  │  Clean build directory");
	console.log("  gulp deploy │  Deploy to local wordpress server");
	console.log("  gulp watch  │  Watch changes, build and deploy automatically");
	console.log(" ");
	console.log("  Version: " + version);
	console.log(" ");
});

gulp.task('build', function(){
	return gulp.src(['src/**/*'])
		.pipe(plumber())
		.pipe(gulp.dest(location_build));
});

gulp.task('clean', function(){
	return gulp.src(location_build)
		.pipe(plumber())
		.pipe(clean());
})

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest(location_build))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('php', function(){
	return gulp.src('src/**/*.php')
		.pipe(plumber())
		.pipe(gulp.dest(location_build))
		.pipe(browserSync.reload({
            stream: true
        })
		);
})


gulp.task('deploy', function(){
	return gulp.src('build/**/*')
		.pipe(shell('cp -R '+ location_build +'/. ~/' + location_wp));
});


gulp.task('watch', function() {
    browserSync.init({
        proxy: theme_name + ".dev"
    });

    gulp.watch('src/**/*.php', () => runSequence(['php'], ['deploy'])).on("change", browserSync.reload)
  	gulp.watch('src/sass/**/*.scss', () => runSequence(['sass'], ['deploy'])).on("change", browserSync.reload)
});
