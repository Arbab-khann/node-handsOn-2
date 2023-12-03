const express = require("express");
const routecompo = express.Router();
const home = require("./home");
const about = require("./about");

routecompo.get("/home", home);
routecompo.get("/about", about);

routecompo.get("/ab", (req, res) => {
  res.send("this is ab page");
});

module.exports = routecompo;
