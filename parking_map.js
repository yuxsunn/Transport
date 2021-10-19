mapboxgl.accessToken = 'pk.eyJ1IjoiemhpcWluZ3ciLCJhIjoiY2t0anJ1Y2xoMWV6NTJ3bm1xNnBoNWt0eiJ9.oBR-Za509LFKgj2khrxf2g';
var map = new mapboxgl.Map({
    container: 'parking_map',
    style: 'mapbox://styles/zhiqingw/ckur17j9i1zir17k9t1q5ascb',
    zoom: 14,
    center: [144.9631, -37.814107]
});
 
// map.on('load', function () {
//     map.addSource('museums', {
//     type: 'vector',
//     url: 'mapbox://mapbox.2opop9hr'
// });
// map.addLayer({
//     'id': 'museums',
//     'type': 'circle',
//     'source': 'museums',
//     'layout': {
//     'visibility': 'visible'
//     } ,
//     'paint': {
//     'circle-radius': 8,
//     'circle-color': 'rgba(55,148,179,1)'
//     },
//     'source-layer': 'museum-cusco'
// });
 
// map.addSource('contours', {
//     type: 'vector',
//     url: 'mapbox://mapbox.mapbox-terrain-v2'
// });
// map.addLayer({
//     'id': 'contours',
//     'type': 'line',
//     'source': 'contours',
//     'source-layer': 'contour',
//     'layout': {
//     'visibility': 'visible',
//     'line-join': 'round',
//     'line-cap': 'round'
//     },
//     'paint': {
//     'line-color': '#877b59',
//     'line-width': 1
//     }
// });
// });
 
var toggleableLayerIds = [ 'accident', 'on_street_parking', 'off_street_parking'];
 
for (var i = 0; i < toggleableLayerIds.length; i++) {
var id = toggleableLayerIds[i];
 
var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;
 
link.onclick = function (e) {
var clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();
 
var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
 
if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
}
};
 
var layers = document.getElementById('parking_menu');
layers.appendChild(link);
}
 