let summary_data
let daily_data
let new_case = document.querySelector(".newcase")
let death_case = document.querySelector(".deathcase")
let recovered_case = document.querySelector(".recoveredcase")

async function get_summary(data) {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	summary_data = await response.json()
}

async function get_daily() {
	let url = 'https://api.covid19api.com/dayone/country/malaysia'
	let response = await fetch(url)
	daily_data = await response.json()
}

call_daily = () => {
	let date_collector = []
	let confirmedCase_collector = []
	let deathCase_collector = []
	let recoveredcase_collector = []
	for(var index = 0; index<daily_data.length; index++){
		date_collector.push(date_formmating(daily_data[index]["Date"]))
		confirmedCase_collector.push(daily_data[index]["Confirmed"])
		deathCase_collector.push(daily_data[index]["Deaths"])
		recoveredcase_collector.push(daily_data[index]["Recovered"])
	}
	return [date_collector, confirmedCase_collector,deathCase_collector,recoveredcase_collector]
}

get_country = (country) => {
	for(let index = 0; index< summary_data["Countries"].length; index++){
		if(summary_data["Countries"][index]["Slug"] == country || summary_data["Countries"][index]["Country"] == country){
			new_case.innerText = summary_data["Countries"][index]["TotalConfirmed"]
			death_case.innerText = summary_data["Countries"][index]["TotalDeaths"]
			recovered_case.innerText = summary_data["Countries"][index]["TotalRecovered"]
		}
	}
}

display_country_list = (country) => {
	let storesHtml = ''
	let list = summary_data["Countries"]
	var el = document.querySelectorAll('.country-container')

	if(el){
		for(let i = 0; i<el.length; i++){
			el[i].remove()
		}
	}
    
	if(country.length >= 3){
		for(let [index,data] of list.entries()){
			let listOfCountry = data["Slug"]
			let countryCode = data["CountryCode"]
			if(listOfCountry.includes(country,0)) {
				storesHtml += `
				<div class="country-container">
					<div class="country-container-background">
						<div class="country-number">  
							<div class="store-number">${index + 1}</div>
						</div>
						<div class="country-flag">
							<span class="flag-icon flag-icon-${countryCode.toLowerCase()}"></span>
						</div>
						<div class="country-name">
							<span>${listOfCountry}</span>
						</div>  
					</div>
				</div>     
				`
			}
			document.querySelector('.country_list').innerHTML = storesHtml;
		}
	}
}

display_graph = () => {
	let storeHTML = `<div class="graph_container">
						<div class="graph_block">
							<canvas id="myChart" width="2000" height="400"></canvas>
						</div> 
					</div>`
	document.querySelector('.country_list').innerHTML = storeHTML;
}

date_formmating = (data) => {
	let date = new Date(data)
	let day = date.getDate()
	let month  = date.toLocaleString('default', { month: 'short' })
	return `${month}-${day}`
}
document.querySelector("#input_country").addEventListener("keydown", () => {
	let countries = document.querySelector("#input_country").value
	get_country(countries)
	display_country_list(countries)
})

document.querySelector(".fa.fa-search.fa-2x.search-icon").addEventListener("click", () => {
	let data = call_daily()
	draw_graph(data)
})

get_summary()
get_daily()