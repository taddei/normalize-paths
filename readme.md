# Normalize Paths #

You can use it to normalize a series of paths, helpful if creating a cross-platform config object

```javascript
import normalizePaths from 'normalize-paths'

const assetsFolder = `${__dirname}`/public/assets;

const paths = {
    srcs: {
        js: `${__dirname}/scripts/js`,
        sass: `${__dirname}/sass`
    },
    dest: {
        js: `${assetsFolder}/js`
    }
};

export default normalizePaths(paths)
```
