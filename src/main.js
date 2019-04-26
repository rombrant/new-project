import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('images/', true));

import "./scripts/maps.js";
import "./scripts/hide-menu.js";