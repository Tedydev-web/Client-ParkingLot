export const RemoveById = (mapView, id) => {
  if(mapView.getLayer(id)) mapView.removeLayer(id);
  if(mapView.getSource(id)) mapView.removeSource(id);
}

export const DrawLine = (mapView, id, coordinates, options) => {
  if(!options) options = {};
  RemoveById(mapView, id);
  mapView.addSource(id, {
    "type": "geojson",
    "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "LineString",
            "coordinates": coordinates 
        }
    }
  });

  mapView.addLayer({
    id: id,
    "type": "line",
    "source": id,
    "layout": {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': options.colorLine || '#080',
      'line-opacity': options.opacity || 0.8,
      'line-width': options.width || 6
    }
  })
}

export const EnabledBuilding = (mapView, enable, fieldName, layer_id) => {
  if(enable){
    mapView.addLayer({
      'id': layer_id || '3d-buildings',
      'source': 'composite',
      'source-layer': fieldName || 'VN_Building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': {
          'type': 'identity',
          'property': 'height'
        },
        'fill-extrusion-base': {
          'type': 'identity',
          'property': 'min_height'
        },
        'fill-extrusion-opacity': .4
      }
    });
  }
  else{
    if(mapView.getLayer(layer_id || '3d-buildings')) mapView.removeLayer(layer_id || '3d-buildings');
  }
}
