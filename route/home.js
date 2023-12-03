const express = require("express");
const home = express();

home.get("/home", (req, res) => {
  res.send("this is home page");
});

module.exports = home;
