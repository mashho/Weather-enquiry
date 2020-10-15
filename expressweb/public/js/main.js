const btnSubmit = document.getElementById("submit")
const cityName = document.getElementById("cityname")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temperature")
const weather = document.getElementById("weather")
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = "Please enter a city name"
        alert("Please enter a city name");
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=851061dfc2b5f6af30dd0e0cea0c248b`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp + "(celcius)";
            city_name.innerText = arrData[0].name + " , " + arrData[0].sys.country;
            weather.innerText = arrData[0].weather[0].description;
        } catch {
            alert("Please enter the name properly");
        }
    }


}
btnSubmit.addEventListener("click", getInfo)