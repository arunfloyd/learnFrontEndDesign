const express = require("express");

const app = express();

let data = "Initial Data";
const waitingList = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingList.push(res);
  }
});

// Use post/put to update
app.get("/updateData", (req, res) => {
  data = req.query.data;

  while (waitingList.length > 0) {
    const client = waitingList.pop();
    client.json({ data }); // Same as the res.json() one at a time if there is  a new updatar
  }
  res.send({ success: "Data updated successfully" });
});

const port = process.env.PORT || 5012;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
