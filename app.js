// Import the express module and initialize the express app
const express = require('express');
const app = express();
const cors = require('cors');

// Imports all the routes from the routes.js file in the routes folder
const routes = require('./routes/routes.js');

app.use(cors());

// Middleware to utilize the routesin the route.js file
app.use('/', routes);

// Sets application to run on port 4444
app.listen(4444, () => {
    console.log("Server running on port 4444");
});