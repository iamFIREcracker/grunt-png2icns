'use strict';

module.exports = function (grunt) {
  var pkg = require('../package.json');
  var taskName = pkg.name.toLowerCase().replace(
    /^@.*?\//,
    ''
  ).replace(
    /^grunt-/,
    ''
  );
  var taskDescription = pkg.description;

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var spawn = require('child_process').spawnSync;
    var which = require('which').sync;

    var options = this.options({
      cmd: 'png2icns'
    });
    var args = [];
    this.files.forEach(function (file) {
      args = args.concat(file.dest);
      args.push(file.src);
      var child = spawn(which(options.cmd), args, {
        stdio: 'inherit'
      });

      if (child.error) {
        grunt.fail.warn(child.error);
      }

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};
