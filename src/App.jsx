import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import ListCity from "./components/ListCity";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeLoc from "./components/TimeLoc";
import { getFormatedWeatherData } from "./services/weatherService";

export default function App() {
  const [query, setQuery] = useState({ q: 'jakarta' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFormatedWeatherData({q: 'jakarta'}, units);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query, units]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-24 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <ListCity />
        {weather && (
          <>
            <TimeLoc time={weather} />
            <TemperatureDetails weather={weather} />
            <Forecast title={"Hourly Forcast"} data={weather.hourly} />
          </>
        )}
      </div>
    </>
  );
}
