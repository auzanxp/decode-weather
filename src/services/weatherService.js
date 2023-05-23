import axios from "axios";
import { DateTime } from "luxon";

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;

const getWeatherData = async (infoType, searchParams) => {
    const url = `${baseURL}/${infoType}`;
    const params = { ...searchParams, appid: SECRET_KEY };
    try {
        const data = await axios.get(url, { params });
        return data.data;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
    }
};

const mapListCurrentData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather: [{ description, icon }],
        wind: { speed, deg }
    } = data

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, dt, speed, deg, description, icon }
}

const mapListForecastData = (data) => {
    let { timezone, hourly } = data
    hourly = hourly.slice(1, 7).map(data => {
        return {
            title: formatToLocalTime(data.dt, timezone, 'hh:mm a'),
            main: data.weather[0].main,
            desc: data.weather[0].description,
            temp: data.temp,
            icon: data.weather[0].icon,
            windSpeed: data.wind_speed,
            windDeg: data.wind_deg,
            humidity: data.humidity,
            feelsLike: data.feels_like
        }
    })

    return { timezone, hourly }
}

export const formatToLocalTime = (
    secs, zone, format = "cccc, dd LLL yyyy' | local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export const handleIconWeather = (data) => `https://openweathermap.org/img/wn/${data}@2x.png`

export const getFormatedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather',searchParams)
        .then(mapListCurrentData)

    const { lat, lon, dt } = formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData(`onecall/timemachine`,
        {
            lat, lon, dt, units: 'metric',
        }).then(mapListForecastData)


    return { ...formattedCurrentWeather, ...formattedForecastWeather }
}