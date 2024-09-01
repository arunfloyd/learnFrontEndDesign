const express = require("express");
const app = express();

// Custom Convertion
const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    //Redirect to https
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
};

app.use(redirectToHttps);
app.use((req, res, next) => {
  res.setHeader("Referrer", "origin");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains;preload"
  );
  res.removeHeader("X-Powered-By");
  res.removeHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.get("/list", (req, res) => {
  res.send([{ id: 1, title: "Namaste " }]);
});

const port = process.env.PORT || 5010;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
