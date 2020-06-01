// var requestOptions = {
// 	method: 'GET',
// 	redirect: 'follow'
//   };

// let data;
//   fetch("https://api.covid19api.com/summary", requestOptions)
// 	.then(response => response.json())
// 	.then(result => data = result)
// 	.catch(error => console.log('error', error));

async function test() {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	
	let data = await response.json()
	var countryInput = document.getElementById("input_country")
	alert(	"NewConfirmed = " + data["Global"]["NewConfirmed"])
	countryInput.value = data["Global"]["NewConfirmed"]
}

test()