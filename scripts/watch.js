var chokidar = require('chokidar');
var generate = require('./generate.js');

chokidar.watch('./docs').on('all', (event, path) => {
  generate.start();
});
