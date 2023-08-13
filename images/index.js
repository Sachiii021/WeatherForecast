const apikey = "5ea7e583ef8afbb57fb38042015e4160";
const apiUril = "https://api.openweathermap.org/data/2.5/weather?q&units=metricq=banglore";
async function checkWeather(){
    const response = await fetch(apiUrl +'&appid=$(apiKey');
    var data= await response.json();

    console.log(data);
}
checkWeather();