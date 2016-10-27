module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    //require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: {
            source: '_site',
            dist: '_site_dist',
            baseurl: ''
		},
        uglify: {
            build: {
                src: 'js/*.js',
                dest: 'js/build/global.min.js'
            }
        },

        sass: {
            options: {
                //style: 'expanded', // compressed, compact, expanded, nested
                outputStyle: 'compact',
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss',
                    'css/grid.css': 'sass/grid.scss',
                    'css/classic.css': 'sass/classic.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 1%']
            },
            no_dest: {
                src: 'css/*.css' // globbing is also possible here
            }
        },

        watch: {
            options: {
                livereload: true
            },
            site: {
                files: ["*.html", "**/*.html", "*.md", "**/*.md", "**/*.yml", "*.yml", "!_site/*.*", "!_site/**/*.*"],
                tasks: ["shell:jekyllBuild"]
            },
            js: {
                files: ["js/*.js"],
                tasks: ["uglify", "shell:jekyllBuild"]
            },
            css: {
                files: ["sass/*.scss", "sass/partials/*.scss", "sass/partials/components/*.scss", "sass/partials/layout/*.scss", "sass/modules/*.scss"],
                tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
            }
        },

        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built _site from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'https://github.com/user/reponame.git', // change that
                    branch: 'gh-pages' // adjust here
                }
            }
        },

        shell: {
            jekyllServe: {
                command: "jekyll serve  --no-watch"
            },
            jekyllBuild: {
                command: "jekyll build"
            }
        },
        
         htmlmin: {                                     // Task
				dist: {                                      // Target
				  options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
					minifyCSS: true
					},
				  files: [{                                   // Dictionary of files
					expand: true,
					cwd: '_site',
					src: '**/*.html',
					dest: '_site_min'
//					'_site/index3.html': '_site/index.html'     // 'destination': 'source'
					}]
				}
//				dev: {                                       // Another target
//				  files: {
//					'_site_dist/index.html': 'src/index.html',
//					'_site_dist/contact.html': 'src/contact.html'
//				  }
//				}
		  }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-build-control');

    // Default task(s).

    grunt.registerTask("serve", ["shell:jekyllServe"]);
//    grunt.registerTask("build", ["sass", "autoprefixer", "uglify", "shell:jekyllBuild"]);
    grunt.registerTask("build", ["sass", "autoprefixer", "shell:jekyllBuild"]);
    grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);
    grunt.registerTask("deploy", ["buildcontrol:pages"]);
    grunt.registerTask('htmlmini', ['htmlmin']);
};
// ping url's for search engines
//http://submissions.ask.com/ping?sitemap=http://maniana.strefa.pl/sitemap.xml
//http://www.bing.com/webmaster/ping.aspx?siteMap=http://maniana.strefa.pl/sitemap.xml
//http://www.google.com/webmasters/sitemaps/ping?sitemap=http://maniana.strefa.pl/sitemap.xml
