const express = require("express");
const about = express();

about.get("/about", (req, res) => {
  res.send("this is about page");
});

module.exports = about;
