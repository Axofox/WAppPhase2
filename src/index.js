let temperature = 23;
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
function conversionToFahrenheit() {
	document.getElementById("temp").innerHTML = `${Math.round(
		(temperature * 9) / 5 + 32
	)}°`;
	document.getElementById("celsius-link").className = "link-darkGrey";
	document.getElementById("fahrenheit-link").className = "link-orange";
}
function conversionToCelsius() {
	document.getElementById("temp").innerHTML = `${temperature}°`;
	document.getElementById("celsius-link").className = "link-orange";
	document.getElementById("fahrenheit-link").className = "link-darkGrey";
}

function searchCity(event) {
	event.preventDefault();
	let city = document.getElementById("myCity");
	let cityInput = document.getElementById("inputSearch");
	city.innerHTML = cityInput.value;
	cityInput.value = "";
}
document.getElementById("form").addEventListener("submit", searchCity);

document
	.getElementById("fahrenheit-link")
	.addEventListener("click", conversionToFahrenheit, false);

document
	.getElementById("celsius-link")
	.addEventListener("click", conversionToCelsius, false);

currentDay(new Date());

currentTime(new Date());

console.log("hello");
