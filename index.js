const express = require("express");
const app = express();
const routecompo = require("./route/routecompo");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/route", routecompo);

app.listen(6050, (req, res) => {
  try {
    console.log("server started........");
  } catch (err) {
    console.log(err, "error");
  }
});
