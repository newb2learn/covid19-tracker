let data
let new_case = document.querySelector(".newcase")
let death_case = document.querySelector(".deathcase")
let recovered_case = document.querySelector(".recoveredcase")


async function get_global(country) {
	let url = 'https://api.covid19api.com/summary'
	let response = await fetch(url)
	data = await response.json()
	console.table(data)
	console.log("get_global")
	// new_case.innerText = data[country]["TotalConfirmed"]
	// death_case.innerText = data[country]["TotalDeaths"]
	// recovered_case.innerText = data[country]["TotalRecovered"]
	}
	get_global("Global")

get_country = (country) => {
	console.log("get_country")
	for(let index = 0; index< data["Countries"].length; index++){
		console.log(index)
		if(data["Countries"][index]["Slug"] = country){
			console.log("in")
			new_case.innerText = data["Countries"][index]["TotalConfirmed"]
			death_case.innerText = data["Countries"][index]["TotalDeaths"]
			recovered_case.innerText = data["Countries"][index]["TotalRecovered"]
		}
	}
}

display_country_list = (countries) =>{
	console.log("display_country_list")
	var storesHtml = ''
	console.table(data)
	let list = data["Countries"]
	for(var [index,data] of list.entries()){
		let listOfCountry = data["Countries"][index]["Slug"]
		if(listOfCountry.includes(countries)) {
		let test = 
	  	storesHtml += `
		<div class="country-container">
		<div class="country-container-background">
			<div class="country-flag">
				<i class="fa fa-flag-o" aria-hidden="true"></i>
			</div>
			<div class="country-name">
				<span>Malaysia</span>
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

document.addEventListener("keyup", () => {
	console.log("keyup")
	let countries = document.querySelector("#input_country").value
	//get_country(countries)
	display_country_list(countries)
})