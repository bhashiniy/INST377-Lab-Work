// Leaflet can be a bit old-fashioned.
// Here's some code to remove map markers.
map.eachLayer((layer) => {
  if (layer instanceof L.Marker) {
    layer.remove();
  }
});

function initMap() {
  const map = L.map("map").setView([38.9897, -76.9378], 13);
  
  return map;
}

const map = initMap();

function markerPlace(restaurants) {

  markersLayer.clearLayers();


  restaurants.forEach((restaurant) => {
    const latLng = L.latLng(restaurant["coordinates"][1], restaurant["coordinates"][0]);
    const marker = L.marker(latLng).addTo(markersLayer);
    marker.bindPopup(`<b>${restaurant["name"]}</b><br>${restaurant["category"]}`).openPopup();
  });


  const firstRestaurantLatLng = L.latLng(restaurants[0]["coordinates"][1], restaurants[0]["coordinates"][0]);
  map.panTo(firstRestaurantLatLng);
}

async function fetchData() {

  const restaurants = await response.json();
}
