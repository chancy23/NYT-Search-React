//load all the required npms
var express = require("express");
// var logger = require("morgan");
var mongoose = require("mongoose");

//require API routes 
var routes = require("./routes/apiRoutes");

//API tools (may need to move to API Routes file)
// var axios = require("axios");

//link to the models as var db (used in our controller file)
// var db = require("./models");

//set up server and initialize express
var PORT = process.env.PORT || 3001;
var app = express();


// middleware ==================================================
// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
// app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB (this also creates the DB if not already created, but not showing in robo3t?)
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact" 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
console.log(MONGODB_URI);


// require("./routes/htmlRoutes")(app);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

app.use(routes);

//set the server listening
app.listen(PORT, function(){
console.log("Server Listening at http://localhost:" + PORT);
});