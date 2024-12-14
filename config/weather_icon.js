import ic_weather_sunny from "../static/images/weather/ic_weather_sunny.png";
import ic_weather_few_clouds from "../static/images/weather/ic_weather_few_clouds.png";
import ic_weather_cloud from "../static/images/weather/ic_weather_cloud.png";
import ic_weather_rain from "../static/images/weather/ic_weather_rain.png";
import ic_weather_rain_thunderstorm from "../static/images/weather/ic_weather_rain_thunderstorm.png";
import ic_weather_snow from "../static/images/weather/ic_weather_snow.png";
import ic_weather_wind from "../static/images/weather/ic_weather_wind.png";
import ic_weather_night from "../static/images/weather/ic_weather_night.png";
import ic_weather_night_clouds from "../static/images/weather/ic_weather_night_clouds.png";

export function getWeatherIcon(icon) {
  switch (icon) {
    case "01d":
      return ic_weather_sunny;
    case "02d":
      return ic_weather_few_clouds;
    case "03d":
    case "04d":
      return ic_weather_cloud;
    case "09d":
    case "10d":
      return ic_weather_rain;
    case "11d":
      return ic_weather_rain_thunderstorm;
    case "13d":
      return ic_weather_snow;
    case "50d":
      return ic_weather_wind;
    case "01n":
      return ic_weather_night;
    case "02n":
    case "03n":
    case "04n":
      return ic_weather_night_clouds;
    case "09n":
    case "10n":
      return ic_weather_rain;
    case "11n":
      return ic_weather_rain_thunderstorm;
    case "13n":
      return ic_weather_snow;
    case "50n":
      return ic_weather_wind;
    default:
      return null;
  }
}
