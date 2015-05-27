module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    var files = ['routes/**/*.js', 'lib/**/*.js', 'tests/**/*.js', '*js'];

    grunt.initConfig({
        jshint: {
            files: files,
            options: {
                jshintrc: './.jshintrc'
            }
        },
        jscs: {
            files: {
                src: files
            },
            options: {
                config: '.jscsrc',
                esnext: true
            }
        },
        // Configure a mochaTest task 
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              captureFile: 'results.txt', // Optionally capture the reporter output to a file 
              quiet: false, // Optionally suppress output to standard out (defaults to false) 
              clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
            },
            src: ['tests/**/*.js']
          }
        }
    });

    grunt.registerTask('codestyle', ['jshint', 'jscs']);
    grunt.registerTask('test', ['codestyle', 'mochaTest']);
    grunt.registerTask('default', ['test']);
};

