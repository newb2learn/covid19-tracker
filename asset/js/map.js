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
	
	var mymap = L.map('mapid').setView(latlng, 6)

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
		//maxZoom: 1,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
	}).addTo(mymap)
	set_marker(latlng,mymap)
  });

  set_marker = (latlng,mymap) => {
	var marker = L.marker(latlng).addTo(mymap)
	var popup = L.popup()
    .setLatLng(latlng)
	.setContent(pop_content())

	marker.bindPopup(popup).openPopup()
  }

  pop_content = () => {
	let content = 
	`<div class="case-list-container">
		<div class="case-list">
			<div class="type-case">
				Confirmed case: <span class="newcase">${summary_data["Global"]["TotalConfirmed"]}</span>
			</div>						
			<div class="type-case">
				Death case: <span class="deathcase">${summary_data["Global"]["TotalDeaths"]}</span>
			</div>						
			<div class="type-case">
				Recovered case: <span class="recoveredcase">${summary_data["Global"]["TotalRecovered"]}</span>
			</div>						
		</div>
	</div>`
  return content;
  }