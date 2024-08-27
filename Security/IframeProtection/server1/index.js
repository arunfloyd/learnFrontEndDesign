const express = require("express");

const PORT = process.env.PORT || 3010;
const app = express();

app.use(express.static("public"));

app.get("/1", (req, res) => {
  res.sendFile(__dirname + "/example1.html");
});
app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/example2.html");
});

app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/example3.html");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
