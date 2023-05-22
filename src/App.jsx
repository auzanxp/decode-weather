import Forecast from "./components/Forecast";
import ListCity from "./components/ListCity";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeLoc from "./components/TimeLoc";
import { getFormatedWeatherData } from "./services/weatherService";

export default function App() {
  const getData = async () => {
    const data = await getFormatedWeatherData({ q: "jakarta" });
    console.log(data);
  };

  getData();
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <ListCity />
        <TimeLoc />
        <TemperatureDetails />
        <Forecast title={"Hourly Forcast"} />
        <Forecast title={"Hourly Forcast"} />
      </div>
    </>
  );
}
