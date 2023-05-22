// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

import axios from "axios";

// const getWeatherData = (infoType, searchParams) => {
//     const url = new URL(`${process.env.REACT_APP_BASE_URL}/${infoType}`);
//     url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_API_KEY });

//     return fetch(url)
//         .then((res) => res.json())
// }

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;

const getWeatherData = async (infoType, searchParams) => {
    const url = `${baseURL}/${infoType}`;
    const params = { ...searchParams, appid: SECRET_KEY };

    try {
        const data = await axios.get(url, { params });
        return data.data;
    } catch (error) {
        throw new Error(error.data.message);
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
        wind: { speed, deg, gust }
    } = data

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, dt, speed, deg, gust, description, icon }
}

export const getFormatedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(mapListCurrentData)

    return formattedCurrentWeather
}