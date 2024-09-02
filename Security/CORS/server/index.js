const express = require("express");

const PORT = process.env.PORT || 3010;
const app = express();

// To allow we have to use cors
const cors = require("cors");

// To allow requests from a specific origin (localhost:5500)
var allowedOrigin = ["http://127.0.0.01:5500"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Done </h1>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
