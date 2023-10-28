const express = require("express");
const routerVendors = express.Router();
const path = require("path");

routerVendors.use(
  "/static",
  express.static(path.join(__dirname, "../static/CSS/main.css"))
);
routerVendors.use(
  "/bootstrap",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist"))
);
routerVendors.use(
  "/jquery",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

module.exports = routerVendors;
