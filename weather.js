const city = document.getElementById("city")
const condition = document.getElementById("weathercond")
const temp = document.getElementById("temperature")
const description = document.getElementById("detail")
const pressure = document.getElementById("pressuree")
const humidity = document.getElementById("humidity")
const speed = document.getElementById("speed")
const date = document.getElementById("date")
d=new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


async function fetchData(search){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+search+"&appid=01bb3d4e89ad105d1007aa5189f561a0")
    const data = await response.json();
    console.log(data);

    city.innerHTML = data.name;
    date.innerHTML="Date: "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
    condition.innerHTML = data.weather[0].description;
    temp.innerHTML = data.main.temp + "°C";
    console.log(data.main.pressure)
    pressure.innerHTML = "Pressure: " + data.main.pressure + " hPA";
    humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
    console.log(humidity)
    speed.innerHTML = "Wind Speed: "+data.wind.speed + " m/s";
    const { "1h": rain1h, "3h": rain3h } = data.rain || {};




    const rainfall = rain1h ? rain1h + " mm (1h)" : rain3h ? rain3h + " mm (3h)" : "N/A";
    document.getElementById("raiNFall").innerHTML=`Rainfall: ${rainfall}`



    const wicon = document.querySelector(".wicon")
    if(data.weather[0].main=="Clear"){
        wicon.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if(data.weather[0].main=="Clouds"){
        wicon.src = "https://openweathermap.org/img/wn/02d@2x.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        wicon.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        wicon.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if(data.weather[0].main=="Rain"){
        wicon.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if(data.weather[0].main=="Snow"){
        wicon.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if(data.weather[0].main=="Mist"){
        wicon.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    // if(data.cod=="404"){
    //     console.log("cityddd")
    //     document.getElementsByClassName("climate")[0].innerHTML=`City not found!!`
    // }
}
fetchData("Scottsdale");

const btn = document.getElementById("btn")
btn.onclick = function(){
    let input = document.getElementById('input').value;
    fetchData(input);
}