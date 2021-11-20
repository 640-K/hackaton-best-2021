
const express = require('express');
const axios = require('axios');
const url = require('url');
const path = require('path');
const fs = require('fs');

const nearbySearchUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
const data = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));

var app = express();

var staticPath = path.join(__dirname, '/src');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3001);

app.get('/api/places', (req, res) => {
    console.log(req)
    const query = url.parse(req.url,true).query;
    res.setHeader('Access-Control-Allow-Origin', '*');
    axios.get(`${nearbySearchUrl}?keyword=${query.keyword}&location=${query.location}&radius=${query.radius}&key=${data.maps.key}`).then(result => {
        if (result.data.status === 'OK') {
            res.send(result.data.results);
        }
    });
});

process.on('uncaughtException', (err) => {
    console.log("Uncaught exception: " + err);
});

var server = app.listen(app.get('port'), () => {
    console.log('Listening on ' + app.get('port'));
});
