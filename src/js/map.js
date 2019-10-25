// eslint-disable-next-line no-unused-vars
function initMap() {
  const uluru = { lat: 53.8920966, lng: 27.5482666 };
  const map = new window.google.maps.Map(
    document.getElementById('map'), { zoom: 10, center: uluru },
  );
  const marker = new window.google.maps.Marker({ position: uluru, map });
}
