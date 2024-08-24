const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");

const app = express();
const server = createServer(app);

app.get("/sse", (req, res) => {
  //setup sse logic
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

   // Send an initial message
   res.write("data: Welcome to Server Sent Events\n\n");

   // Send the current server time every 5 seconds
   const intervalId = setInterval(() => {
     res.write(`data: Server time: ${new Date().toISOString()}\n\n`);
   }, 5000);

  req.on('close',()=>{
    clearInterval(intervalId)
  })

});
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
