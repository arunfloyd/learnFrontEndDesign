const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//Webhook Endpoint
app.post("/webhook", (req, res) => {
  //Extract the payload from the incoming POST request
  const payLoad = req.body;

  console.log("Recieved Webhook payload", payLoad);

  res.status(200).send("Webhook received successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
