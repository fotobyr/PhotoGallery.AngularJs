module.exports = function(config){
    config.set({
    basePath : '',

    files : [
      'lib/angular.js',
      'lib/angular-*.js',
      'javascripts/*.js',
      'spec/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}