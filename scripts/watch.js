var chokidar = require('chokidar');
var render = require('./render.js');

chokidar.watch('./docs').on('all', (event, path) => {
  render.start();
});
