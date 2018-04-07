// Create the map
var map = L.map('map').setView([39.5, -0.5], 5);

// Set up the OSM layer
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 18}).addTo(map);

// add a marker in the given location
L.marker([36.83711,-2.464459]).addTo(map);