const Client = require("@googlemaps/google-maps-services-js").Client;
const express = require("express");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "https://prototype-frontend.herokuapp.com/");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
 }); 
 const placesController = require('./controllers/places.controller.server')
 const client = new Client({});
placesController(app, client)
app.listen(process.env.PORT || 5000);

