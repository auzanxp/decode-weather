import {
  // UiLArrowUp,
  // UiLArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import {
  formatToLocalTime,
  handleIconWeather,
} from "../services/weatherService";

const TemperatureDetails = ({ weather }) => {
  return (
    <>
      <div className="flex items-center justify-center pt-3">
        <p className="text-white font-light text-xl">{weather.description}</p>
      </div>
      <div className="flex flex-row items-center justify-center text-white px-3 space-x-3">
        <img
          src={handleIconWeather(weather?.icon)}
          alt="image weather"
          className="w-28"
        />
        <p className="text-5xl">{`${weather.temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Temp Min:
            <span className="font-medium ml-1">
              {`${weather.temp_min.toFixed()}`} &#8451;
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Temp Max:
            <span className="font-medium ml-1">
              {`${weather.temp_max.toFixed()}`} &#8451;{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm pb-3">
        <UilSun />
        <p className="font-light">
          {" "}
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          {" "}
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilWind />
        <p className="font-light">
          {" "}
          Speed:{" "}
          <span className="font-medium ml-1">{`${weather.speed.toFixed()} km/h`}</span>
        </p>
        <p className="font-light">|</p>

        <UilWind />
        <p className="font-light">
          {" "}
          Degrees:{" "}
          <span className="font-medium ml-1">{`${weather.deg.toFixed()}°`}</span>
        </p>
      </div>
    </>
  );
};

export default TemperatureDetails;
