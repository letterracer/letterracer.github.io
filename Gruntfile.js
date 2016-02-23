module.exports = function(grunt) {
    vendor_scripts = [
        "bower_components/jquery/dist/jquery.min.js",
        "js/responsive-imagemaps.min.js",
        "bower_components/remodal/dist/remodal.min.js",
        "bower_components/headroom.js/dist/headroom.min.js",
        "bower_components/headroom.js/dist/jQuery.headroom.min.js",
        "bower_components/isotope/dist/isotope.pkgd.min.js",
        "bower_components/imagesloaded/imagesloaded.pkgd.min.js"
    ];

    shop_vendor_scripts = vendor_scripts.concat(["node_modules/jquery-zoom/jquery.zoom.min.js"]);

    grunt.initConfig({
      concat: {
        main: {
          src: vendor_scripts,
          dest: 'js/vendors.js'
        },
        shop: {
          src: shop_vendor_scripts,
          dest: 'js/vendors-shop.js'
        }
      },
      uglify: {
        options: {
          mangle: {
            except: ['jQuery', '$', 'isotope', 'Mason']
          }
        },
        main: {
          files: {
            'js/vendors.min.js': ['js/vendors.js'],
            'js/preload.min.js': ['js/preload.js'],
            'js/main.min.js': ['js/main.js']
          }
        },
        shop: {
          files: {
            'js/vendors-shop.min.js': ['js/vendors-shop.js']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['uglify']);
}