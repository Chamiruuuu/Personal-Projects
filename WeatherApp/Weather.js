const form = document.querySelector(".weatherform");
const city = document.querySelector(".CityName")
const humidity = document.querySelector(".humidity")
const apiKey = "2a0e03fd88c80e5580dcabb63875c18a"
const errorcon = document.querySelector(".error-container")
const btn = document.querySelector(".btn")


form.addEventListener("submit",(e) =>{
    e.preventDefault()

    const GetCity = document.querySelector(".cityinput").value.toLowerCase();
    const apiUrl =` https://api.openweathermap.org/data/2.5/weather?q=${GetCity}&appid=${apiKey}`
    const inputcity = document.querySelector(".cityinput");
    inputcity.value = "";


    fetch(apiUrl)
    .then(response =>{

        if(!response.ok){
            throw new Error("Cant find city")
        }
        return response.json()
    })

    .then ((currentData) =>{
        console.log(currentData)
        displayWeather(currentData)
    })

    .catch((err) => {
        console.log(err)
        errorcon.style.display = "block"
        btn.addEventListener("click", ()=>{
            errorcon.style.display = "none"
        })
        

    }); 
}) 


function displayWeather(currentData){
    const maincontainer = document.querySelector(".main-container");
    const city = document.querySelector(".CityName")
    const weatherdesc = document.querySelector(".WeatherDesc");
    const temperature = document.querySelector(".temp")
    const Windspeed = document.querySelector(".Windspeed");
    const humidity = document.querySelector(".Humidity");
    const Weatheremoji = document.querySelector(".WeatherEmoji")

    maincontainer.style.display = "flex"


    let temp =  currentData.main.temp - 273.15
    let windspeedKmh = currentData.wind.speed * 3.6;

    temperature.textContent = `${temp.toFixed(2) + '°C'}`
    city.textContent =` ${currentData.name}`
    Windspeed.textContent = ` ${windspeedKmh.toFixed(2)} km/h`
    humidity.textContent = ` ${currentData.main.humidity}%`



    if(temp > 25){
        Weatheremoji.textContent = "🌞"
        weatherdesc.textContent = "Sunny"
        maincontainer.style.backgroundImage = `url(${'/images/clearsky.jpg'})`

    } else if(temp >= 20 && temp <= 25){
        Weatheremoji.textContent = "🌤️"
        weatherdesc.textContent = "Partly Cloudy"
        maincontainer.style.backgroundImage = `url(${'/images/partlycloudy.jpg'})`


    }else if(temp < 20 && temp >= 10){
        Weatheremoji.textContent = "🌧️"; 
        weatherdesc.textContent = "Rainy"
        maincontainer.style.backgroundImage =`url(${'/images/Rainy.jpg'})`


    }else{
        Weatheremoji.textContent = "❄️"
        weatherdesc.textContent = "Snowy"
        maincontainer.style.backgroundImage =`url(${'/images/Snowy.jpg'})`
    }
}