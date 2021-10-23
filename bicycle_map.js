/**
 * Eidited from solution of lab 7
 * https://jsfiddle.net/4kzf7sLx/3/
 * 
 */

 mapboxgl.accessToken = 'pk.eyJ1IjoiemhpcWluZ3ciLCJhIjoiY2t0anJ1Y2xoMWV6NTJ3bm1xNnBoNWt0eiJ9.oBR-Za509LFKgj2khrxf2g';
 let bicycle_map = new mapboxgl.Map({
     container: 'bicycle_map', 
     style: 'mapbox://styles/zhiqingw/ckv127l2z2d3y14qkkkyo0t4n',
     zoom: 15,
     center: [144.9631, -37.814107]
   });

   bicycle_map.on('load', e => {
     let layers = [{
       "name": "On road bike lane",
       "color": "#9144da",
       "type": "line"
     },
     {
       "name": "Off road bike lane",
       "color": "#f67979",
       "type": "line"
     },
     {
       "name": "Informal bike lane",
       "color": "#00c70a",
       "type": "line"
     },
     {
       "name": "Corridor",
       "color": "#ffc252",
       "type": "line"
     },
     {
      "name": "Bicycle Accident",
      "color": "#000000",
      "type": "dot"
    }
   ];
 
   let legend = document.querySelector('#legend');
 
   for (let layer of layers) {
     let item = document.createElement('div');
 
     let key = document.createElement('span');
     if(layer.type == "line"){
      key.classList.add('legend-key');
     }else{
      key.classList.add('legend-key-dot');
     }
     
     key.style.backgroundColor = layer.color;
 
     let value = document.createElement('span');
     value.innerHTML = layer.name;
 
     item.appendChild(key);
     item.appendChild(value);
     legend.appendChild(item);
   }
 
   
 
   bicycle_map.on('mousemove', e => {
     let buildinginfo = bicycle_map.queryRenderedFeatures(e.point, {
       layers: ['bicycle']
     });
   });
   
   bicycle_map.on('mouseenter', 'bicycle', e => {
    bicycle_map.getCanvas().style.cursor = 'pointer';
     
   });
 
   bicycle_map.on('mouseleave', 'bicycle', e => {
    bicycle_map.getCanvas().style.cursor = '';
   });
   
   bicycle_map.on('click', 'bicycle', e => {
    new mapboxgl.Popup()
     .setLngLat(e.lngLat)
     .setHTML('<span class="popup-address">' + e.features[0].properties.name)
     .addTo(bicycle_map);
   });
 
 
   });
 
//    function getDate(date){
     
//      let year = date.substring(0,4);
//      let month = date.substring(4,6);
//      let day = date.substring(6,8);
//      return year + '.' + month + '.' + day;
 
//    }