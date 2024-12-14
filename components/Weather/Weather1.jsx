import React, { useEffect } from "react";

import { getWeatherIcon } from "../../config/weather_icon";

function Weather({ temp, icon, city }) {
  useEffect(() => {
    console.log("Weather component mounted with:", temp, icon, city);
  }, [temp, icon, city]);

  return (
    <div className="Borde">
      <div className="Mass">
        <div className="Masssmall">
          <h1 className="City_name">{city !== null ? city : "Loading ..."}</h1>
        </div>
        <div className="Weather_content" aria-label={`Thời tiết ở ${city}`} role="group">
          <div className="Display_Temperature">
            {temp !== null ? `${temp}°` : ""}
          </div>
          {icon && (
            <img
              className="Temperature"
              alt="Weather icon"
              src={getWeatherIcon(icon)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Weather;
