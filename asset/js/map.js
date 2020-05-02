var mymap = L.map('mapid').setView([3.140853, 101.693207], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiNTQyMjQiLCJhIjoiY2ptYWRscDFjNDdmZTN1bXQyOG53ZjAzZiJ9.ZgiXkGijJS4EULYV8rgfPA'
}).addTo(mymap);