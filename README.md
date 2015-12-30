grunt-png2icns
=============

Generate ICNS file from multiple PNG files with png2icns.


INSTALL
-------

This Grunt plugin does not available in npm registry yet, so you must install
from my GitHub repository:

    $ npm install @iamFIREcracker/grunt-png2icns

Then, load this task in `Gruntfile.js` of your project:

    loadNpmTask('grunt-png2icns');


CONFIGURE
---------

Task name is `png2icns`.

    png2icns: {
      main: {
        dest: 'build/icon.icns',
        src: [
          'build/img/icon-16.png',
          'build/img/icon-256.png',
          'build/img/icon-32.png',
          'build/img/icon-48.png'
        ]
      },

      osx: {
        options: {
          // Specify renamed command name for working without modifying PATH
          cmd: 'png2icns'
        },

        dest: 'build/icon.icns',
        src: [
          'build/img/icon-16.png',
          'build/img/icon-32.png'
        ]
      }
    }

Enjoy!
