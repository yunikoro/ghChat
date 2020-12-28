const delay = require('mocker-api/lib/delay');
// const user = require('./user')
let proxy = {};
const normalizedPath = require('path').join(__dirname, './');

console.log(normalizedPath);
require('fs')
  .readdirSync(normalizedPath)
  .forEach(file => {
    const pair = require(`./${file}`);
    proxy = { ...pair, ...proxy };
  });

console.log(proxy);

module.exports = delay(proxy, 300);
