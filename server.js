// Requiring necessary npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port 
const PORT = process.env.PORT || 8080;

const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", { useNewUrlParser: true });

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
