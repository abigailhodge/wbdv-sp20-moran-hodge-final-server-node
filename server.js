const Client = require("@googlemaps/google-maps-services-js").Client;
const express = require("express");

const app = express();
const client = new Client({});

app.listen(3000);

app.get('/api/places', (req, res) => res.send('all places'))

app.get('/api/places/:placeid', (req, res) => res.send('specific place'))

// client
//   .textSearch({
//     params: {
//       query: "coffee",
//       key: process.env.GOOGLE_MAPS_API_KEY,
//     },
//     timeout: 1000 // milliseconds
//   })
//   .then(r => {
//     console.log(r.data.results);
//   })
//   .catch(e => {
//     console.log(e);
//   });

//   client
//   .details({
//     params: {
//       place_id: "coffee",
//       key: process.env.GOOGLE_MAPS_API_KEY,
//       fields: "formatted_address,name,photo,vicinity,formatted_phone_number,opening_hours,website,price_level,rating,review"
//     },
//     timeout: 1000 // milliseconds
//   })
//   .then(r => {
//     console.log(r.data.results);
//   })
//   .catch(e => {
//     console.log(e);
//   });
