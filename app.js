
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
//key 13 triggers results when enter is pressed
function setQuery(evt){
    if (evt.keyCode ==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
// function getResults(query){
//     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
//     .then(weather=>{
//         return weather.json();
// })  .then(successful_fetch);
// }
// const tempElement = document.querySelector(".tempValue");
// const descriptionElement = document.querySelector(".tempDescription");
// const locationElement = document.querySelector(".location");

// const weather = {};

// weather.temperature = {
//     unit : "kelvin"
// }


// function Retrieve(query){
    // data.main.temp
// function convert(data){
//     var fahrenheit;
//     fahrenheit = ((data- 273.15)*1.8) + 32;
//     return fahrenheit
// }
// converted = convert////////NO!!!!




//conditions
// function  successful_fetch(data){
    
        
// }76-81 is ok
function getResults(query){
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=19682f460eba5594ac42e3ad5a7be152`)
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=19682f460eba5594ac42e3ad5a7be152`)
  
    .then(weather=>{
        return weather.json();
    }).then(showResult);
    
}
function showResult(weather){
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let now = new Date();
    let date= document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    console.log(weather.main);
    let temp=document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} `+ '°F';

    console.log(weather.weather[0].main);
    let description=document.querySelector('.description');
    description.innerHTML = `${weather.weather[0].main}`;

    console.log(weather.main.humidity);
    let hum=document.querySelector('.humidity');
    hum.innerHTML = weather.main.humidity + '%';

    console.log(weather.main.temp_min);
    let low=document.querySelector('.low');
    low.innerHTML = 'low'+ ' '+ Math.round(weather.main.temp_min)+ '°F';

    console.log(weather.main.temp_max);
    let hi=document.querySelector('.hi');
    hi.innerHTML = 'hi'+ ' '+ Math.round(weather.main.temp_max) + '°F';
    
}


   
    // console.log(data.main.temp);
    // let tempDiv=document.querySelector(' .temp');
    // tempDiv.innerHTML = data.main.temp + '°F';

    // console.log(data.weather[0].main);
    // let descriptDiv=document.querySelector('.weather');
    // descriptDiv.innerHTML = data.weather[0].main;

    // console.log(data.main.humidity);
    // let humDiv=document.querySelector('.humidity');
    // humDiv.innerHTML = data.main.humidity + '%';

    // console.log(data.main.temp_min);
    // let lDiv=document.querySelector('.low');
    // lDiv.innerHTML = 'low'+ ' '+data.main.temp_min+ '°F';

    // console.log(data.main.temp_max);
    // let hDiv=document.querySelector('.hi');
    // hDiv.innerHTML = 'hi'+ ' '+data.main.temp_max+ '°F';


    // let temp= document.querySelector('.current .temp');
    // temp.innerHTML=`${Math.round(weather.main.temp)}<span>°F</span>`;
    // let weather_el = document.querySelector('.current .weather');

///////////////////////////////this WORKS
//temp
// function  successful_fetch(data){

//     console.log(data.main.temp);
//     let tempDiv=document.querySelector('.temp');
//     tempDiv.innerHTML = data.main.temp + '°F';

//     console.log(data.weather[0].main);
//     let descriptDiv=document.querySelector('.weather');
//     descriptDiv.innerHTML = data.weather[0].main;

//     console.log(data.main.humidity);
//     let humDiv=document.querySelector('.humidity');
//     humDiv.innerHTML = data.main.humidity + '%';

//     console.log(data.main.temp_min);
//     let lDiv=document.querySelector('.low');
//     lDiv.innerHTML = 'low'+ ' '+data.main.temp_min+ '°F';

//     console.log(data.main.temp_max);
//     let hDiv=document.querySelector('.hi');
//     hDiv.innerHTML = 'hi'+ ' '+data.main.temp_max+ '°F';
// }
function dateBuilder(d){
    let months=["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return`${date} ${month} `;
}

//         .then(function(data){
//             weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//             weather.description = data.weather[0].description;
//             weather.iconId = data.weather[0].icon;
//             weather.city = data.name;
//         })
//         .then(function(){
//             show();
//         });
// }

// function show(){
//     tempElement.innerHTML = `${weather.temperature.value}<span>K</span>`;
//     descriptionElement.innerHTML = weather.description;
//     locationElement.innerHTML = `${weather.city}`;
// }

// let day = days[d.getDay()];

// tempElement.addEventListener("click",function(){

//     if (weather.temperature.unit ==="kelvin"){
//         let fahrenheit=Kelvintofahr(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML =`${fahrenheit}<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
//         tempElement.innerHTML=`${weather.temperature.vaule}<span>K</span>`;
//         weather.temperature.unit="kelvin";
//         }
//     });