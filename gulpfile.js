'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const runSequence = require('run-sequence');
const webpack = require('webpack')
var ftp = require( 'vinyl-ftp' )
let version

//COMMON
gulp.task('clean', function() {
  return del([
    './dest/',
    './.tmp/'
  ], {force: true});
});

gulp.task('build', cb => {
  // We need to set NODE_ENV to production to get a deployable build
  // DON'T IMPORT THE WEBPACK CONFIG BEFORE THIS IS DONE
  /*$.env.set({ NODE_ENV: 'staging' })*/
  $.env.set({ NODE_ENV: 'production' })
  const webpackConfig = require('./webpack.config')

  // Now run webpack with production config
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.compilation.errors.length > 0) {
      throw new $.util.PluginError('webpack', err || stats.compilation.errors[0])
    } else {
      version = stats.hash
      cb()
    }
  })
})

gulp.task( 'deploy', function () {
  const credentials = require('./credentials.json');
  var conn = ftp.create( {
    host:     'aideas.ai',
    user:     credentials.user,
    password: credentials.password,
    parallel: 10
  } );
  var globs = [
    'dest/css/**',
    'dest/fonts/**',
    'dest/images/**',
    'dest/js/**',
    'dest/index.js'
  ];
  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/public_html' ) ) // only upload newer files
    .pipe( conn.dest( '/public_html' ) );
} );

gulp.task('publish', ['clean'], function(){
  runSequence('build');
})
