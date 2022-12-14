const $weatherFor = $('#weatherFor');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $cityInput = $('input[type="text"');

let weatherData, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  userInput = $cityInput.val();
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=c32d2efeabeffc789455c514ef1fe50e&units=imperial",
  }).then(
    (data) => {
      weatherData = data

      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
  $weatherFor.text(weatherData.name);
  $temperature.text(weatherData.main.temp);
  $weather.text(weatherData.weather[0].description);
  $feelsLike.text(weatherData.main.feels_like);
}