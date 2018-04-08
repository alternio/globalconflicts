// Create the map
var map = L.map('map').setView([39.5, -0.5], 5);

// Set up the OSM layer
L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

// add a marker in the given location
var marker = L.marker([36.83711,-2.464459]);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

marker.addTo(map);





map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';
var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);
