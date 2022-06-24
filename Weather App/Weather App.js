// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
	key: "db766914f87df78b1cd9dbab90efc917",
	baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


// Event Listener Function on Ketpress
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener("keypress", (event) => {

	if(event.keyCode == 13){
		console.log(searchInputBox.value);
		getWeatherReport(searchInputBox.value);
		document.querySelector('.weather-body').style.display = "block";
	}
	
});


// Get Weather Report
function getWeatherReport(city) {
	fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
	.then(weather => {
		return weather.json();
	}).then(showWeatherReport);
}


// Show Weather Report
function showWeatherReport(weather){
	console.log(weather);

	let city = document.getElementById('city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let temperature = document.getElementById('temp');
	temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

	let minMaxTemp = document.getElementById('min-max');
	minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

	let weatherType = document.getElementById('weather');
	weatherType.innerText = `${weather.weather[0].main}`;

	let date =document.getElementById('date');
	let todayDate = new Date();
	date.innerText = dateManage(todayDate);

	if(weatherType.textContent == "Clear"){
		document.body.style.backgroundImage = "url('Images/clear.jpg')";
		document.getElementById("myImg").src = "Icons/Clear.png";

	}else if(weatherType.textContent == "Clouds"){
		document.body.style.backgroundImage = "url('Images/cloudy.jpg')";
		document.getElementById("myImg").src = "Icons/Clouds.png";

	}else if(weatherType.textContent == "Rain"){
		document.body.style.backgroundImage = "url('Images/rain.jpg')";
		document.getElementById("myImg").src = "Icons/Rain.png";

	}else if(weatherType.textContent == "Snow"){
		document.body.style.backgroundImage = "url('Images/snow.jpg')";
		document.getElementById("myImg").src = "Icons/Snow.png";

	}else if(weatherType.textContent == "Sunny"){
		document.body.style.backgroundImage = "url('Images/sunny.jpg')";
		document.getElementById("myImg").src = "Icons/Sunny.png";

	}else if(weatherType.textContent == "Haze"){
		document.body.style.backgroundImage = "url('Images/haze.jpg')";
		document.getElementById("myImg").src = "Icons/Haze.png";

	}else if(weatherType.textContent == "Thunderstorm"){
		document.body.style.backgroundImage = "url('Images/thunderstorm.jpg')";
		document.getElementById("myImg").src = "Icons/Thunderstorm.png";
	}

}


// Date Manage
function dateManage(dateArg){

	let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	let year = dateArg.getFullYear();
	let month = months[dateArg.getMonth()];
	let date = dateArg.getDate();
	let day = days[dateArg.getDay()];

	return `${date} ${month} (${day}), ${year}`;
}

