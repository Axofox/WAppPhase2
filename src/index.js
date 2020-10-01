var test = 1;
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
	let cityInput = document.getElementById("inputSearch");
	getWeatherFromApi(jsUcfirst(cityInput.value));
	cityInput.value = "";
}

function displayCurrentTemp(response) {
	console.log(response.data);
	let temperatureElem = document.getElementById("temp");
	let currentCoversion = document.getElementById("buttonConversion").innerHTML;
	temperatureElem.innerHTML = Math.round(response.data.main.temp);
	if (currentCoversion === "°F") {
		conversionToFahrenheit();
	}
	test = response;

	let myCityElem = document.getElementById("myCity");
	myCityElem.innerHTML = response.data.name;

	let humidity = document.getElementById("humidity");
	humidity.innerHTML = `: ${response.data.main.humidity}%`;

	let wind = document.getElementById("wind");
	wind.innerHTML = `: ${Math.round(response.data.wind.speed)} m/s`;

	let precipitation = document.getElementById("rain");
	precipitation.innerHTML = `: ${response.data.rain} mm`;

	let description = document.getElementById("cloud");
	description.innerHTML = `: ${response.data.weather[1].main}`;
}

function getWeatherFromApi(city) {
	console.log("Inside function, getting weather for: ", city);
	let apiKey = "85f0d2edf77153a605301a461e1c1922";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	console.log("apiUrl: ", apiUrl);
	axios.get(apiUrl).then(displayCurrentTemp);
}

function jsUcfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTemperatureForPosition(position) {
	let apiKey = "85f0d2edf77153a605301a461e1c1922";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(displayCurrentTemp);
}

function geoLocation() {
	navigator.geolocation.getCurrentPosition(getTemperatureForPosition);
}

function conversionToFahrenheit() {
	let temperature = document.getElementById("temp").innerHTML;
	console.log(temperature);
	document.getElementById("temp").innerHTML = `${Math.round(
		(temperature * 9) / 5 + 32
	)}`;
	console.log(temperature, "f");

	document.getElementById("buttonConversion").innerHTML = "°F";
	console.log(document.getElementById("temp").innerHTML);
}

function conversionToCelsius() {
	let temperature = document.getElementById("temp").innerHTML;
	console.log(temperature, "c");
	document.getElementById("temp").innerHTML = `${Math.round(
		((temperature - 32) * 5) / 9
	)}`;
	console.log(temperature);
	document.getElementById("buttonConversion").innerHTML = "°C";
	console.log(document.getElementById("temp").innerHTML);
}
document
	.getElementById("buttonConversion")
	.addEventListener("click", conversionTemp);

function conversionTemp() {
	let currentCoversion = document.getElementById("buttonConversion").innerHTML;
	console.log(currentCoversion, "AAA");
	if (currentCoversion.includes("°C")) {
		conversionToFahrenheit();
		console.log("convert C");
	} else {
		conversionToCelsius();
		console.log("convert F");
	}
}

// document
// 	.getElementById("fahrenheit-link")
// 	.addEventListener("click", conversionToFahrenheit, false);
// document
// 	.getElementById("celsius-link")
// 	.addEventListener("click", conversionToCelsius, false);
