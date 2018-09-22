'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fs = require('fs');



const material = {
  prefix: "@material",
  src: "node_modules",

  packages: [
    { name: 'animation',        css: true,  js: true  },
    { name: 'base',             css: false, js: true  },
    { name: 'button',           css: true,  js: false },
    { name: 'card',             css: true,  js: false },
    { name: 'checkbox',         css: true,  js: true  },
    { name: 'drawer',           css: true,  js: true  },
    { name: 'elevation',        css: true,  js: false },
    { name: 'fab',              css: true,  js: false },
    { name: 'floating-label',   css: true,  js: true  },
    { name: 'form-field',       css: true,  js: false },
    { name: 'grid-list',        css: true,  js: false },
    { name: 'icon-button',      css: true,  js: true,  subName: ['icon-toggle'] },
    { name: 'icon-toggle',      css: true,  js: true  },
    { name: 'image-list',       css: true,  js: false },
    { name: 'layout-grid',      css: true,  js: false },
    { name: 'line-ripple',      css: true,  js: true  },
    { name: 'linear-progress',  css: true,  js: true  },
    { name: 'list',             css: true,  js: false },
    { name: 'menu',             css: true,  js: true  },
    { name: 'notched-outline',  css: true,  js: true  },
    { name: 'radio',            css: true,  js: true  },
    { name: 'ripple',           css: true,  js: true  },
    { name: 'rtl',              css: false, js: false },
    { name: 'switch',           css: true,  js: false },
    { name: 'tabs',             css: true,  js: true  },
    { name: 'textfield',        css: true,  js: true  },
    { name: 'theme',            css: true,  js: false },
    { name: 'toolbar',          css: true,  js: true  },
    { name: 'typography',       css: true,  js: false },
  ],

  import_package: function (app, packagePath, packageName) {
    const id = packageName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

    app.import({
      development:  packagePath + "/dist/mdc." + id + ".js",
      production:   packagePath + "/dist/mdc." + id + ".min.js"
    },{ using: [{ transformation: 'amd', as: material.prefix + '/' + packageName }] });
  }
};

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [__dirname + "/lib_material"]
    }
  });

  // Import Material Files
  material.packages.forEach(pkg => {
    const packagePath = material.src + '/' + material.prefix + '/' + pkg.name;
    if(!fs.existsSync(packagePath)) return;

    if(pkg.js) {
      material.import_package(app, packagePath, pkg.name);

      if(pkg.subName) {
        pkg.subName.forEach(subPKG => material.import_package(app, packagePath, subPKG));
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
