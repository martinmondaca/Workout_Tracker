// Requiring necessary npm packages
var express = require("express");

// Setting up port 
var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
