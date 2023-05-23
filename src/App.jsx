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
    document.title = "Weather App";
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
      <div
        className="leading-normal min-h-screen tracking-normal bg-cover p-6 bg-fixed"
        style={{ backgroundImage: 'url("/landing.jpg")' }}
      >
        <div className="mx-auto max-w-screen-md my-6 py-5 px-10 md:px-24 rounded-xl bg-opacity-10 bg-gradient-to-br from-gray-900 to-slate-700  h-fit shadow-xl shadow-gray-400">
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
      </div>
    </>
  );
}
