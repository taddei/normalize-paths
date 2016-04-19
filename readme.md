# normalize-paths

> Use this module to format a path configuration object in order to run it on Unix and Windows systems.
>
> Allows you to write a clean path configuration whilst the plugin will take care of normalizing the paths depending on the OS running the script


## Installation

With [npm](https://www.npmjs.com/) do

    npm install normalize-paths --save

## How to use it

```javascript
var normalizePaths = require('normalize-paths');

var assetsFolder = __dirname + '/public/assets';

var paths = {
    srcs: {
        js: __dirname + '/scripts/js',
        sass: __dirname + '/sass'
    },
    dest: {
        js: assetsFolder + '/js',
        css: assetsFolder + '/css'
    }
};

module.exports = normalizePaths(paths);
```

Output on Unix system:
```
{
  srcs: {
    js: '/home/taddei/project/scripts/js',
    sass: '/home/taddei/project/sass'
  },
  dest: {
    js: '/home/taddei/project/public/assets/js',
    css: '/home/taddei/project/public/assets/css'
  }
}
```

Output on Windows system:
```
{
  srcs: {
    js: 'c:\\Users\\taddei\\project\\scripts\\js',
    sass: 'c:\\Users\\taddei\\project\\project\\sass'
  },
  dest: {
    js: 'c:\\Users\\taddei\\project\\public\\assets\\js',
    css: 'c:\\Users\\taddei\\project\\public\\assets\\css'
  }
}
```

## License

[MIT](http://g14n.info/mit-license/)
