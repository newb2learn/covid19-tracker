let data

async function get_global() {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	data = await response.json()

/* GLOBAL */
	var new_case = document.querySelector(".newcase")
	var death_case = document.querySelector(".deathcase")
	var recovered_case = document.querySelector(".recoveredcase")

	new_case.innerText = data["Global"]["TotalConfirmed"]
	death_case.innerText = data["Global"]["TotalDeaths"]
	recovered_case.innerText = data["Global"]["TotalRecovered"]
}

get_global()