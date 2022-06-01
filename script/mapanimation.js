const trainStops = [
  [-73.905029, 40.696095],
  [-73.911166, 40.699511],
  [-73.919277, 40.704294],
  [-73.923569, 40.706994],
  [-73.93198, 40.706279],
  [-73.939877, 40.707612],
  [-73.940735, 40.711906],
  [-73.944426, 40.714509],
  [-73.951464, 40.712752],
  [-73.95756, 40.71772],

];

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWR1bW9yYWMiLCJhIjoiY2wzMmR4Mnh2MDZ0YjNjcndjaW9peGQydyJ9.K1_Pkr60gY0tIesBI3hqcA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.905029, 40.696095],
  zoom: 12,
  });

let marker = new mapboxgl.Marker()
.setLngLat([-73.905029, 40.696095])
.addTo(map);

let counter = 0;
function move() {

  setTimeout(() => {
    if (counter >= trainStops.length) return;
    marker.setLngLat(trainStops[counter]);
    counter++;
    move();
  }, 500);
}

if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, trainStops };
}
