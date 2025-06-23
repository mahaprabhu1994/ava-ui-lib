'use strict';

var index = require('./index-Hcx1Vt7G.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.35.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('ava-ui-lib.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["ava-button.cjs",[[1,"ava-button",{"label":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=ava-ui-lib.cjs.js.map

//# sourceMappingURL=ava-ui-lib.cjs.js.map