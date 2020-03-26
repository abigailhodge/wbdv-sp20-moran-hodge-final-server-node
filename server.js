const Client = require("@googlemaps/google-maps-services-js").Client;

const client = new Client({});

client
  .textSearch({
    params: {
      query: "coffee",
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000 // milliseconds
  })
  .then(r => {
    console.log(r.data.results);
  })
  .catch(e => {
    console.log(e);
  });

