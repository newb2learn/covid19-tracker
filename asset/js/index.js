let data
let new_case = document.querySelector(".newcase")
let death_case = document.querySelector(".deathcase")
let recovered_case = document.querySelector(".recoveredcase")


async function get_global() {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	data = await response.json()
}
get_global()

get_country = (country) => {
	console.log("get_country")
	for(let index = 0; index< data["Countries"].length; index++){
		if(data["Countries"][index]["Slug"] == country || data["Countries"][index]["Country"] == country){
			new_case.innerText = data["Countries"][index]["TotalConfirmed"]
			death_case.innerText = data["Countries"][index]["TotalDeaths"]
			recovered_case.innerText = data["Countries"][index]["TotalRecovered"]
		}
	}
}

display_country_list = (country) =>{
	let storesHtml = ''
	let list = data["Countries"]
	var el = document.querySelectorAll('.country-container')

	if(el){
		console.log(el.length)
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
						<div class="country-flag">
							<span class="flag-icon flag-icon-${countryCode.toLowerCase()}"></span>
						</div>
						<div class="country-name">
							<span>${listOfCountry}</span>
						</div>  
						<div class="country-number">  
							<div class="store-number">1</div>
						</div>
					</div>
				</div>     
				`
			}
			document.querySelector('.country_list').innerHTML = storesHtml;
		}
	}
}

document.addEventListener("keydown", () => {
	let countries = document.querySelector("#input_country").value
	get_country(countries)
	display_country_list(countries)
})