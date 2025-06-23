import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-Dwt9gxAC.js';
export { s as setNonce } from './index-Dwt9gxAC.js';

/*
 Stencil Client Patch Browser v4.35.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ava-button",[[1,"ava-button",{"label":[1]}]]]], options);
});
//# sourceMappingURL=ava-ui-lib.js.map

//# sourceMappingURL=ava-ui-lib.js.map