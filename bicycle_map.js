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
       "color": "#9144da"
     },
     {
       "name": "Off road bike lane",
       "color": "#f67979"
     },
     {
       "name": "Informal bike lane",
       "color": "#00c70a"
     },
     {
       "name": "Corridor",
       "color": "#ffc252"
     }
   ];
 
   let legend = document.querySelector('#legend');
 
   for (let layer of layers) {
     let item = document.createElement('div');
 
     let key = document.createElement('span');
     key.classList.add('legend-key');
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
       console.log(e.features[0].properties);
    //  new mapboxgl.Popup()
    //     .setLngLat(e.lngLat)
    //     .setHTML('<span class="popup-address">' + getDate(e.features[0].properties.reported_date.toString())+ '</span><br>' + e.features[0].properties.victim_age + ' years old<br>Race: ' + e.features[0].properties.victim_race + '<br>Victem gender: ' + e.features[0].properties.victim_sex)
    //     .addTo(map);
   });
 
 
   });
 
//    function getDate(date){
     
//      let year = date.substring(0,4);
//      let month = date.substring(4,6);
//      let day = date.substring(6,8);
//      return year + '.' + month + '.' + day;
 
//    }