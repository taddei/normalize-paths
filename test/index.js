var path = require('path');
var chai = require('chai');
var expect = chai.expect;

var normalizePaths = require('../index');

describe('test nested paths', function () {

  it('should normalize correctly a single path', function () {
    expect(normalizePaths('..//hello//sds')).to.be.equal('../hello/sds');
  });

  it('should normalize correctly array of paths', function () {

    var paths = [
      '..//hello//sds',
      './test/morePath'
    ];

    var normalizedPaths = [
      '../hello/sds',
      'test/morePath'
    ];
    expect(normalizePaths(paths)).to.be.deep.equal(normalizedPaths);
  });

  it('should normalize correctly objects of paths', function () {

    var paths = {
      srcs: {
        js: __dirname + '/js',
        ssss: __dirname + '/sass'
      },
      dest: __dirname + '/../public//assets'
    };

    var normalizedPaths = {
      srcs: {
        js: path.join(__dirname, '/js'),
        ssss: path.join(__dirname, '/sass')
      },
      dest: path.join(__dirname, '../public/assets')
    };

    expect(normalizePaths(paths)).to.be.deep.equal(normalizedPaths);
  });

});