const express = require("express");
const bodyParser = require("body-parser");
const session = require("session");
const crypto = require("crypto");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check Referer header
app.use((req, res, next) => {
  const referer = req.get("referer");

  //Check if Referer header exists and matches the expected domain

  if (referer && referer.startsWith("http://yourwebsite.com")) next();
  else res.status(403).send("Forbidden. Invalid Referer header");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
s;
