// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express Instance
var app = express();
// Sets an initial port to use later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
