// eslint-disable-next-line no-unused-vars
const MINSK_LAT = 53.8920966;
const MINSK_LNG = 27.5482666;

function initMap() {
  const coordinates = { lat: MINSK_LAT, lng: MINSK_LNG };
  const map = new window.google.maps.Map(
    document.getElementById('map'), { zoom: 10, center: coordinates },
  );
  const marker = new window.google.maps.Marker({ position: coordinates, map });
  console.log(marker);
}
