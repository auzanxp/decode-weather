import { formatToLocalTime } from "../utils/formatWeather";


export const mapListCurrentData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather: [{ description, icon }],
        wind: { speed, deg }
    } = data;

    const currentData = {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise,
        sunset,
        dt,
        speed,
        deg,
        description,
        icon
    };

    return currentData;
};

export const mapListForecastData = (data) => {
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