const apiid="&APPID=365307d91c2cc43541eb1d5e857c12e5";
const sr =document.querySelector(".searchin");
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+sr.value+apiid;


const checkWeather = async ()=>{
    const response =await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    var city=document.querySelector(".city");
    var temp=document.querySelector(".temp");
    var humidity=document.querySelector(".humidity");
    var windspeed=document.querySelector(".windspeed");
    var pressure=document.querySelector(".pressure");
    var feel=document.querySelector(".feel");
    temp.innerHTML="tempararure:" +data.main.temp;
    humidity.innerHTML="humidity:"+data.main.humidity;
    windspeed.innerHTML="windspeed:"+data.wind.speed;
    pressure.innerHTML="pressure"+data.main.pressure;
    city.innerHTML=data.name;
    feel.innerHTML=data.weather[0].main;
    if(data.weather[0].main=='Rain' || data.weather[0].main=='Drizzle' ){
        document.body.style.backgroundImage="url('/Users/prabhaskalyan/Downloads/task/rain-316579_1280.jpg')"; 
        
    }
    else if(data.weather[0].main=='Clouds'){
        document.body.style.backgroundImage="url('/Users/prabhaskalyan/Downloads/task/photo-1513728731559-6bf2c0c931f9.avif')";
    }
    else if(data.weather[0].main=='Clear'){
        document.body.style.backgroundImage="url('/Users/prabhaskalyan/task7/tree-2916763_1280.jpg')";
    }
    
        
    }        
    
var city=sr.value;
var btn=document.querySelector(".button");

btn.addEventListener('click',




);

