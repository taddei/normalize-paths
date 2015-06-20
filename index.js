var path = require('path');

var normalizePaths = module.exports = function (paths) {
  // single path case
  if(typeof paths === 'string') {
    return path.join(paths);
  }

  // case of arrays of paths
  if(Array.isArray(paths)) {
    return paths.map(normalizePaths);
  }

  var keys = Object.keys(paths);
  if(keys.length > 0) {
    // type of generic object
    return keys.reduce(function (obj, key) {
      obj[key] = normalizePaths(paths[key]);
      return obj;
    }, {});
  }
};