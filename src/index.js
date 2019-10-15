
// Initialize and add the map
// function initMap() {
// The location of Uluru
const uluru = { lat: 53.8920966, lng: 27.5482666 };
// The map, centered at Uluru
// eslint-disable-next-line no-undef
const map = new window.google.maps.Map(
  document.getElementById('map'), { zoom: 10, center: uluru }
);
  // The marker, positioned at Uluru
//
// eslint-disable-next-line no-undef
const marker = new google.maps.Marker({ position: uluru, map });

console.log(marker);
alert('dd')
