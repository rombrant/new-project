import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/maps.js";
import "./scripts/hide-menu.js";