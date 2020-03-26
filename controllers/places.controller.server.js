

module.exports = function (app, client) {

app.get('/api/places/search/:searchstring',  (req, res) => {
    client
    .textSearch({
        params: {
        query: req.params['searchstring'],
        key: process.env.GOOGLE_MAPS_API_KEY,
        },
        timeout: 1000 // milliseconds
    })
    .then(r => {
        res.send(r.data.results)
    })
    .catch(e => {
        res.send(e);})
})


app.get('/api/places/:placeid', (req, res) => {
    client
    .placeDetails({
      params: {
        place_id: req.params['placeid'],
        key: process.env.GOOGLE_MAPS_API_KEY,
        fields: ["name","formatted_address","photo","formatted_phone_number","opening_hours","website","price_level","rating","review"]
      },
      timeout: 1000 // milliseconds
    })
    .then(r => {
        res.json(r.data.result);
    })
    .catch(e => {
      res.send(e);
    })})
}

