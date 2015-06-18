/* eslint-env node */

module.exports = {
  options: {
    livereload: false
  },
  livereload: {
    options: {
      livereload: 35710
    },
    files: [
      'dist/css/*.css',
      'dist/js/*.js',
      'dist/fonts/*',
      'dist/img/*'
    ]
  },
  jekyll: {
    files: [
      'app/**/index.html',
      'app/**/_layouts/**/*.html',
      'app/**/*.md',
      'app/**/_plugins/*.rb'
    ],
    tasks: [
      'rsync:devHtmlAppToTmp',
      'fileblocks:dev',
      'rsync:devHtmlTmpToJekyll',
      'rsync:devJekyllPrepare',
      'jekyll:dev'
    ]
  },
  bowerCss: {
    files: [
      'bower_components/**/*.css',
      'app/css/vendors/*.css'
    ],
    tasks: [
      'rsync:devCssDependenciesToJekyll',
      'rsync:devCssDependenciesToDist'
    ]
  },
  css: {
    files: 'app/css/*.scss',
    tasks: [
      'newer:sass:devAppToTmp',
      'newer:autoprefixer:devTmpToJekyll',
      'rsync:devCssTmpToDist'
    ]
  },
  bowerJs: {
    files: 'bower_components/**/*.js',
    task: [
      'rsync:devJsDependenciesToJekyll',
      'rsync:devJsDependenciesToDist'
    ]
  },
  js: {
    files: 'app/js/*.js',
    tasks: [
      'rsync:devJsAppToJekyll',
      'rsync:devJsAppToDist'
    ]
  }
};
