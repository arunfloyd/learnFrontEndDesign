const express = require("express");

const PORT = process.env.PORT || 3011;
const app = express();

// To Deny the use of Iframes in other domain
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");

  //To secure Cookies we can do this
  res.cookie('sessionID','12345',{
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  })
  next();
});



app.use(express.static("public"));

app.get("/iframe-website1", (req, res) => {
  res.sendFile(__dirname + "/iframe-website.html");
});
app.get("/iframe-website2", (req, res) => {
  res.sendFile(__dirname + "/iframe-website2.html");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
