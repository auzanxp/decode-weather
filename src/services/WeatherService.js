import axios from "axios";
import {
    mapListCurrentData,
    mapListForecastData
} from "../mappers/WeatherMappers";

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;

const getWeatherData = async (infoType, searchParams) => {
    const url = `${baseURL}/${infoType}`;
    const params = { ...searchParams, appid: SECRET_KEY, units: 'metric' };
    try {
        const data = await axios.get(url, { params });
        return data.data;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
    }
};

export const getFormatedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(mapListCurrentData)

    const { lat, lon, dt } = formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData(`onecall/timemachine`,
        {
            lat, lon, dt
        }).then(mapListForecastData)


    return { ...formattedCurrentWeather, ...formattedForecastWeather }
}