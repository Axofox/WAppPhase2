function currentDay(date) {
	let currentWeekDay = date.toLocaleString("en-us", { weekday: "long" });
	let currentDate = date.getDate();
	document.getElementById(
		"todayLabel"
	).innerHTML = `${currentWeekDay}, ${currentDate}`;
}
function currentTime(time) {
	let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
	let minutes =
		time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
	document.getElementById("currentTime").innerHTML = `${hours}:${minutes}`;
}

function searchCity(event) {
	event.preventDefault();
	let city = document.getElementById("myCity");
	let cityInput = document.getElementById("inputSearch");
	city.innerHTML = cityInput.value;
	cityInput.value = "";
}
document.getElementById("form").addEventListener("submit", searchCity);

// function conversionToFahrenheit() {
// 	document.getElementById("temp").innerHTML = `${Math.round(
// 		(temperature * 9) / 5 + 32
// 	)}°`;
// 	document.getElementById("celsius-link").className = "link-darkGrey";
// 	document.getElementById("fahrenheit-link").className = "link-orange";
// }
// function conversionToCelsius() {
// 	document.getElementById("temp").innerHTML = `${temperature}°`;
// 	document.getElementById("celsius-link").className = "link-orange";
// 	document.getElementById("fahrenheit-link").className = "link-darkGrey";
// }

// document
// 	.getElementById("fahrenheit-link")
// 	.addEventListener("click", conversionToFahrenheit, false);

// document
// 	.getElementById("celsius-link")
// 	.addEventListener("click", conversionToCelsius, false);

function displayTemp(response) {
	let temperatureElem = document.getElementById("temp");
	temperatureElem.innerHTML = Math.round(response.data.main.temp);
	let myCityElem = document.getElementById("myCity");
	myCityElem.innerHTML = response.data.name;
}
let temp = "11";
let apiKey = "85f0d2edf77153a605301a461e1c1922";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Munich&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);

currentDay(new Date());

currentTime(new Date());

console.log("hello");
