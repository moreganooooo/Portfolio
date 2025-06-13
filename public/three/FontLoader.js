/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * A THREE.Font loader for loading typeface.json font files.
 */

THREE.FontLoader = function (manager) {
  this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.FontLoader.prototype = {
  constructor: THREE.FontLoader,

  load: function (url, onLoad, onProgress, onError) {
    var scope = this;

    var loader = new THREE.FileLoader(this.manager);
    loader.setPath(this.path);
    loader.load(
      url,
      function (text) {
        var json;

        try {
          json = JSON.parse(text);
        } catch (e) {
          console.warn(
            'THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'
          );
          json = JSON.parse(text.replace('typeface.js', 'typeface.json'));
        }

        var font = scope.parse(json);

        if (onLoad) onLoad(font);
      },
      onProgress,
      onError
    );
  },

  parse: function (json) {
    return new THREE.Font(json);
  },
};
