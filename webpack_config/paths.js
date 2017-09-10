var path = require('path');

const ROOT = path.resolve(__dirname, '../');

const resolvePath = function(relativePath) {
  return path.resolve(ROOT, relativePath);
};

const SRC = resolvePath('src');
const DIST = resolvePath('dist');

module.exports = {
  SRC: SRC,
  DIST: DIST
};
