/**
 * Eidited from solution of lab 7
 * https://jsfiddle.net/4kzf7sLx/3/
 * 
 */

mapboxgl.accessToken = 'pk.eyJ1IjoiemhpcWluZ3ciLCJhIjoiY2t0anJ1Y2xoMWV6NTJ3bm1xNnBoNWt0eiJ9.oBR-Za509LFKgj2khrxf2g';
var map = new mapboxgl.Map({
    container: 'parking_map',
    style: 'mapbox://styles/zhiqingw/ckur17j9i1zir17k9t1q5ascb',
    zoom: 15,
    center: [144.9631, -37.814107]
});
 
var dayTransfer = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday"
}
var toggleableLayerIds = [ 'accident', 'on_street_parking', 'commercial'];
 
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
 
map.on('load', e => {

  let layers = [{
    "name": "On-street carpark with restriction",
    "color": "#0cbb2c",
    "type": "line"
  },
  {
    "name": "On-street carpark without restriction",
    "color": "#8e86f3",
    "type": "line"
  },
  {
    "name": "Off-street commercial carpark",
    "color": "#5d14db",
    "type": "dot"
  },
  {
    "name": "Parking-related accident",
    "color": "#ed2c2c",
    "type": "dot"
  }
];

let legend = document.querySelector('#parkmap-legend');

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

  map.on('mousemove', e => {
    let buildinginfo = map.queryRenderedFeatures(e.point, {
      layers: ['on_street_parking']
    });
  });

  map.on('mousemove', e => {
    let buildinginfo = map.queryRenderedFeatures(e.point, {
      layers: ['commercial']
    });
  });
  
  map.on('mouseenter', 'on_street_parking', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'commercial', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'accident', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'on_street_parking', e => {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'commercial', e => {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'accident', e => {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'accident', e => {
    console.log(e.features[0].properties)
    let html_content = '<span class="popup-address"> <h1>' + e.features[0].properties.ACCIDENT_TYPE + '</h1>';
    html_content = html_content = html_content + '</span><br>' + "Causing: " + e.features[0].properties.DCA_CODE.toLowerCase();
    new mapboxgl.Popup()
       .setLngLat(e.lngLat)
       .setHTML(html_content)
       .addTo(map);
  });

  map.on('click', 'commercial', e => {
    console.log(e.features[0].properties)
    let html_content = '<span class="popup-address"> <h1>' + e.features[0].properties.street_name + '</h1>';
    html_content = html_content = html_content + '</span><br>' + "Parking Space: " + e.features[0].properties.parking_spaces;
    new mapboxgl.Popup()
       .setLngLat(e.lngLat)
       .setHTML(html_content)
       .addTo(map);
  });
  
  map.on('click', 'on_street_parking', e => {
  	console.log(e.features[0].properties);
    let restriction = [];
    for(let i = 1; i < 7; i++){
        let des = "Description" + i;
        if(e.features[0].properties[des] != null){
            let properties = e.features[0].properties;
            let from_day = "FromDay" + i;
            let to_day = "ToDay" + i;
            let start_time = "StartTime" + i;
            let end_time = "EndTime" + i;
            let duration = "Duration" + i;
            let str = ""
            if(properties[from_day] == properties[to_day]){
                str = str + dayTransfer[properties[from_day]];
            }else{
                str = dayTransfer[properties[from_day]] + " to " + dayTransfer[properties[to_day]]; 
            }
            str = str + " " + properties[start_time] + " - " + properties[end_time] + " " + properties[duration] + "mins parking";
            restriction.push(str);
        }
    }
    let html_content = '<span class="popup-address"> <h1>' + e.features[0].properties.rd_seg_dsc + '</h1>';
    if(restriction.length == 0){
        html_content = html_content + '</span><br>' + "no restriction";
    }
    for(let i = 0; i < restriction.length; i++){
        html_content = html_content + '</span><br>' + restriction[i];
    }
    new mapboxgl.Popup()
       .setLngLat(e.lngLat)
       .setHTML(html_content)
       .addTo(map);
  });


  });