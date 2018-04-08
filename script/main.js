// Create the map
var map = L.map('map').setView([39.5, -0.5], 5);

// Set up the OSM layer
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo( map );

// add a marker in the given location
var marker = L.marker([36.83711,-2.464459]);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

marker.addTo(map);
