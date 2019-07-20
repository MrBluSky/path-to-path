const pathToPath = require('../index.js');
const list = require('./config.js');

const toPath = pathToPath(list, '/a/123');
console.log('toPath: ', toPath);

const toPath2 = pathToPath(list, '/a/b?name=123');
console.log('toPath2: ', toPath2);

const toPath3 = pathToPath(list, '/a/b#name=123');
console.log('toPath3: ', toPath3);

const toPath4 = pathToPath(list, '/a/bc?name=123');
console.log('toPath4: ', toPath4);

const toPath5 = pathToPath(list, '/a/bcd/123');
console.log('toPath5: ', toPath5);