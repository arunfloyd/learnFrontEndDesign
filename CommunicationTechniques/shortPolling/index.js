const express = require("express");

const app = express();

let data = "Initial Data";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({
    data,
  });
});

// Use post/put to update
app.get("/updateData", (req, res) => {
  data = "New Updated Data";
  res.send({
    data,
  });
});

const port = process.env.PORT || 5012;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
