// var mymap = L.map('mapid').setView([3.140853, 101.693207], 5);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'mapbox/streets-v11',
// 	tileSize: 512,
// 	zoomOffset: -1,
// 	accessToken: 'pk.eyJ1IjoiNTQyMjQiLCJhIjoiY2ptYWRscDFjNDdmZTN1bXQyOG53ZjAzZiJ9.ZgiXkGijJS4EULYV8rgfPA'
// }).addTo(mymap);

navigator.geolocation.getCurrentPosition(function(location) {
	var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  
	var mymap = L.map('mapid').setView(latlng, 13)
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
	  maxZoom: 5,
	//   id: 'mapbox.streets',
	  id: 'mapbox.dark-v10',
	  accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
	}).addTo(mymap);
	
	// $.getJSON('http://ws.geonames.org/countryCode', {
	// 	lat: position.coords.latitude,
	// 	lng: position.coords.longitude,
	// 	type: 'JSON'
	// }, function(result) {
	// 	alert(result.countryName);
	// });
	
	var marker = L.marker(latlng).addTo(mymap);
  });