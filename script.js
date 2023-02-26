let weather = {
    apiKey : "476e3edc621000c9dcfeeb2626991c80" ,
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid="
            + this.apiKey
           
           
        )
        .then((response) => response.json())
        .then((data) => this.dislayWeather(data));
    },
    dislayWeather : function(data){
        const { name } = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon + ".png"
        document.querySelector(".description").innerHTML = description;
        var tem = temp-273;
        document.querySelector(".temp").innerHTML = tem.toFixed(2) +"°C";
        document.querySelector(".humidity").innerHTML ="Humidity : " +humidity+"%";
        document.querySelector(".wind").innerHTML = "Wind speed : " + speed +" km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    } 
};

document.querySelector("button").addEventListener("click", function(){
   
      weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

var x = document.getElementById("demo");



let weather2 = {
    apiKey : "476e3edc621000c9dcfeeb2626991c80" ,
    fetchWeather : function(lat,lon){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat="
            + String(lat)
            + "&lon="
            + String(lon)
            + "&appid="
            + this.apiKey
           
        )
        .then((response) => response.json())
        .then((data) => this.dislayWeather(data));
    },
    dislayWeather : function(data){
      const city = data.name
      weather.fetchWeather(city);
    },
   
};


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  
  function showPosition(position) {
   
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    weather2.fetchWeather(lat,lon);
  };
  

