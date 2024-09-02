const express = require("express");
const bodyParser = require("body-parser");
const session = require("session");
const crypto = require("crypto");

const app = express();
const port = 3000;

// Use Session for tracking CSRF tokens
app.use(
  session({
    secret: "Your secret",
    resave: false,
    saveUninitialized: true,
  })
);
{
  /* <form method="POST" action="/submit">
<input type="hidden" name="csrfToken" value="${req.session.csrfToken}">
<input type="text" name="name">
<input type="submit" value="Submit"> */
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Generate CSRF token and store it in the session
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString("hex");
  }
  //Render the HTML form
  res.send(
    '<html><body><form method="POST" action="/submit"><input type="hidden" name="csrfToken" value="${req.session.csrfToken}"><input type="text" name="name"><input type="submit" value="Submit"></input></body> </html>'
  );
  // add csrf token as hidden field
  //When user submit the form the token also go with it
});

app.post("/submit", (req, res) => {
  //Validate CSRF token on the server side

  const submittedToken = req.body.csrf_token;
  if (!submittedToken || submittedToken !== req.session.csrfToken) {
    res.status(403).send("Forbidden. CSRF token is invalid");
    return;
  }
  //Process the form securely

  //Clear CSRF token after processing

  delete req.session.csrfToken;

  res.send("Form submitted successfully");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});s