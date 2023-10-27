const express = require("express");
const Router = express.Router();
const controller = require("../controllers/Cmain");

Router.get("/", controller.main);

module.exports = Router;
