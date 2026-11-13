const countryName = document.querySelector("#countryName");
const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");
const maxTemp = document.querySelector("#maxTemp");
const minTemp = document.querySelector("#minTemp");
const humidity = document.querySelector("#humidity");

async function checkWeather() {
  const city = document.querySelector("#city").value;
  const apiKey = "d27c00f8328846d4a1df575d5119123e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    const data = await response.json();
    countryName.textContent = "Country Code : " + data.sys.country;
    cityName.textContent = "City Name : " + data.name;
    temp.textContent = "Temperature : " + data.main.temp + " °C";
    maxTemp.textContent = "Max Temp. : " + data.main.temp_max + " °C";
    minTemp.textContent = "Min Temp. : " + data.main.temp_min + " °C";
    humidity.textContent = "Humidity : " + data.main.humidity + " %";
  } catch (error) {
    console.log(error.message);
  }
}

// checkWeather();
