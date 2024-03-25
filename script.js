const search=document.querySelector(".search input");
const search_but=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");
const background=document.querySelector(".card");

const apikey="cea6a00b4906ed79c64e769eba8c5bf4"; 
const wetherurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //"apikey" and "weatherurl" are freched from 'open-weather-map'(https://openweathermap.org/)
async function check_weather(city){
    const responce=await fetch( wetherurl+city+`&appid=${apikey}`);
    if (responce.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        var data=await responce.json();
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temprature").innerHTML= Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%" ;
    document.querySelector(".wind").innerHTML= data.wind.speed+"Km/H";
    if (data.weather[0].main=="Clear"){
        weather_icon.src="clear.png"
    }
    else if(data.weather[0].main=="Clouds"){
        weather_icon.src="clouds.png"
        background.setAttribute("card","clear")
    }
    else if (data.weather[0].main=="Rain"){
        weather_icon.src="rain.png"
    }
    else if (data.weather[0].main=="Snow"){
        weather_icon.src="snow.png"
    }
    else if (data.weather[0].main=="Mist"){
        weather_icon.src="mist.png"
    }
    else if (data.weather[0].main=="Drizzle"){
        weather_icon.src="drizzle.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

        
    }
    
}
search_but.addEventListener("click",()=>{
    check_weather(search.value);

})
