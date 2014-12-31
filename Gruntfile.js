
var collect = require('grunt-collection-helper');


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            'default': {
                files: {
                    'examples/dist/jquery.js': 'bower_components/jquery/dist/jquery.js',
                    'examples/dist/bootstrap.css': 'bower_components/bootstrap/dist/css/bootstrap.css',
                    'examples/dist/jquery.ui.core.js': 'bower_components/jquery-ui/ui/core.js',
                    'examples/dist/jquery.ui.widget.js': 'bower_components/jquery-ui/ui/widget.js',
                    'examples/dist/jquery.ui.mouse.js': 'bower_components/jquery-ui/ui/mouse.js',
                    'examples/dist/jquery.ui.resizable.js': 'bower_components/jquery-ui/ui/resizable.js',
                    'examples/dist/jquery.ui.sortable.js': 'bower_components/jquery-ui/ui/sortable.js',
                    'examples/dist/slick.core.js': 'bower_components/slickgrid/slick.core.js',
                    'examples/dist/slick.grid.js': 'bower_components/slickgrid/slick.grid.js',
                    'examples/dist/slick.dataview.js': 'bower_components/slickgrid/slick.dataview.js',
                    'examples/dist/slick.rowselectionmodel.js': 'bower_components/slickgrid/plugins/slick.rowselectionmodel.js',
                    'examples/dist/slick.checkboxselectcolumn.js': 'bower_components/slickgrid/plugins/slick.checkboxselectcolumn.js',
                    'examples/dist/jquery.event.drag-2.2.js': 'bower_components/slickgrid/lib/jquery.event.drag-2.2.js',
                    'examples/dist/slick.grid.css': 'bower_components/slickgrid/slick.grid.css'
                }
            }
        },
        less: {
            'default': {
                options: {
                    paths: ['examples', 'bootstrap', 'bower_components/bootstrap/less'],
                    yuicompress: false
                },
                files: {
                    'examples/dist/example-bootstrap.css': 'examples/example-bootstrap.less'
                }
            }
        },
        watch: {
            'default': {
                options: {
                    debounceDelay: 250
                },
                files: [
                        'bootstrap/slickgrid.less',
                        'bower_components/bootstrap/less/variables.less'
                        ],
                tasks: ['copy:default', 'less:default']
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['copy:default', 'less:default']);

};
