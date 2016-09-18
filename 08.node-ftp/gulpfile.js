
var gulp = require('gulp');
var sftp = require('gulp-sftp');
 
gulp.task('sftp', function () {
	return gulp.src('dist/release/**')
		.pipe(sftp({
			host:     '10.0.0.232',
            user:     'ftpuser',
            password: '123456',
            // remotePath: '/home/ftpuser/'
			remotePath: '/home/web/static/'
		}));
});


// var gulp = require( 'gulp' );
// var gutil = require( 'gulp-util' );
// var ftp = require( 'vinyl-ftp' );
 
// gulp.task( 'deploy', function () {
 
// 	var conn = ftp.create( {
// 		host:     '10.0.0.232',
// 		user:     'ftpuser',
// 		password: '123456',
//         port: 22,
//         secure:true,
// 		parallel: 10,
// 		log:      gutil.log,
//         secureOptions:{ rejectUnauthorized: false }
// 	} );
 
// 	var globs = [
// 		'dist/release/**',
// 	];
 
// 	// using base = '.' will transfer everything to /public_html correctly 
// 	// turn off buffering in gulp.src for best performance 
 
// 	return gulp.src( globs, { base: '.', buffer: false } )
// 		.pipe( conn.newer( '/js' ) ) // only upload newer files 
// 		.pipe( conn.dest( '/js' ) );
// } );