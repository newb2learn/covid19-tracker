// var requestOptions = {
// 	method: 'GET',
// 	redirect: 'follow'
//   };

// let data;
//   fetch("https://api.covid19api.com/summary", requestOptions)
// 	.then(response => response.json())
// 	.then(result => data = result)
// 	.catch(error => console.log('error', error));
let data
async function test() {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	data = await response.json()

	var new_case = document.querySelector(".newcase")
	var death_case = document.querySelector(".deathcase")
	var recovered_case = document.querySelector(".recoveredcase")

	new_case.innerText = data["Global"]["TotalConfirmed"]
	death_case.innerText = data["Global"]["TotalDeaths"]
	recovered_case.innerText = data["Global"]["TotalRecovered"]
}

test()