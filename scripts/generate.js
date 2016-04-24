var aglio = require('aglio');

var blueprint = 'docs/rocketbeans.apib';
var options = {
  themeVariables: 'flatly'
};

var start = function () {
  aglio.renderFile(blueprint, 'index.html', options, function (error, warnings) {
    if (error) return console.log("Error:",error);
  });
}

start()

module.exports = {
  start : start
}
