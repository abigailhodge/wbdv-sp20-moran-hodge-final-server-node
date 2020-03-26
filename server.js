const Client = require("@googlemaps/google-maps-services-js").Client;
const express = require("express");

const app = express();
const client = new Client({});
const placesController = require('./controllers/places.controller.server')
placesController(app, client)
app.listen(process.env.PORT || 3000);

