import { formatToLocalTime } from "../utils/formatWeather";


const TimeLoc = ({ time }) => {
  return (
    <>
      <div className="flex items-center justify-center my-6 ">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(time.dt, time.timezone)}
        </p>
      </div>
      <div className=" flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${time.name}`}</p>
      </div>
      <div className="flex flex-row space-x-2 justify-center items-center">
        <div className="flex font-light text-sm items-center justify-center text-white">
          Lat:
          <span className="font-medium ml-1">{`${time.lat}`}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center text-white">
          Long:
          <span className="font-medium ml-1">{`${time.lon}`}</span>
        </div>
      </div>
    </>
  );
};

export default TimeLoc;
