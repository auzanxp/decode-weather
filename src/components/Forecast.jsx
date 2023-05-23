import {
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { handleIconWeather } from "../utils/formatWeather";


const Forecast = ({ title, data }) => {
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      {data &&
        data.map((item, i) => (
          <div
            key={i}
            className="flex flex-row items-center justify-between text-white bg-white bg-opacity-10 border rounded-md my-2 p-3"
          >
            <div className="flex flex-row space-x-9 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">{item.title}</p>
                <img
                  src={handleIconWeather(item?.icon)}
                  alt=""
                  className="w-20 my-1"
                />
              </div>
              <div>
                <p className="font-medium text-2xl">{`${item.temp.toFixed()}°`}</p>
                <p className="font-sm text-xs">{item.desc}</p>
              </div>
            </div>

            <div className="flex flex-row space-x-7">
              <div className="flex flex-col space-y-2">
                <div className="flex font-base text-xs items-center justify-start">
                  <UilTemperature size={14} className="mr-1" />
                  Real Fell:
                  <span className="font-medium ml-1">
                    {`${item.feelsLike.toFixed()}`} &#8451;{" "}
                  </span>
                </div>
                <div className="flex font-base text-xs items-center justify-start">
                  <UilTear size={14} className="mr-1" />
                  Humidity:
                  <span className="font-medium ml-1">
                    {`${item.humidity.toFixed()} %`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex font-base text-xs items-center justify-start">
                  <UilWind size={14} className="mr-1" />
                  Speed:
                  <span className="font-medium ml-1">
                    {`${item.windSpeed.toFixed()} km/h`}
                  </span>
                </div>
                <div className="flex font-base text-xs items-center justify-start">
                  <UilWind size={14} className="mr-1" />
                  Degrees:
                  <span className="font-medium ml-1">
                    {`${item.windDeg.toFixed()}°`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Forecast;
