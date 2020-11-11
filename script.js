mapboxgl.accessToken =
  "pk.eyJ1Ijoic3dhcG5pbG1hbGwiLCJhIjoiY2toY3JrZTZtMXFoZTJwbnFkOTA5aHlocCJ9.K3RuwUBrl_-Mg_uv7LMNCQ"

//this is for the pop up we get to enable our location 
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([80.215302, 29.583700])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
