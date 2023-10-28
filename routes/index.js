const express = require("express");
const Router = express.Router();
const controller = require("../controllers/Cmain");
const path = require("path");

Router.get("/", controller.main);

module.exports = Router;
