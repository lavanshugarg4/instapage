const express = require("express");
let app = express();
const path = require("path");

const port = 8080;
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/hello", (req, res) => {
  res.send("Hello!");
});
app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: diceval });
});
app.get("/ig/:username", (req, res) => {
  const instadata = require("./data.json");
  let { username } = req.params;
  let data = instadata[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`listen on the node ${port}`);
});
