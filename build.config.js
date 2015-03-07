module.exports = {
  ng_appname: 'hack4sweden',

  build_dir: 'build',
  compile_dir: 'dist',
  config_dir: './config/',

  config_files: {
    json: ['config/*.json']
  },
  app_files: {
    js: ['src/app/**/*.js'],

    atpl: ['src/app/**/**/*.html'],

    less: 'src/less/themes/default/master.less'
  },

  vendor_files: {
    js: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/jquery-resize/jquery.ba-resize.min.js',
      'bower_components/showdown/compressed/showdown.js',
      'bower_components/respond/dest/respond.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-promise-tracker/promise-tracker.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/underscore/underscore.js',
      'bower_components/momentjs/min/moment-with-langs.min.js',
      'bower_components/Chart.js/Chart.min.js',
      'bower_components/tc-angular-chartjs/dist/tc-angular-chartjs.min.js',
      'git_modules/ng-commons/dist/assets/ng-commons-0.0.0.js'
    ],
    css: [
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
      'bower_components/angular-chart.js/dist/angular-chart.css'
    ],
    assets: [
      'git_modules/*/src/assets/**/*.*'
    ],
    less: [
    ]
  }
};
