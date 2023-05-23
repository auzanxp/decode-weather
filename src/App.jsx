import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import ListCity from "./components/ListCity";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeLoc from "./components/TimeLoc";
import { getFormatedWeatherData } from "./services/WeatherService";
import Loading from "./components/Loading";

export default function App() {
  const [query, setQuery] = useState({ q: "jakarta" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFormatedWeatherData({ ...query });
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-10 md:px-24 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <ListCity action={setQuery} />
        {weather == null ? (
          <Loading />
        ) : (
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
