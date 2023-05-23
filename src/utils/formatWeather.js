import { DateTime } from "luxon"

export const formatToLocalTime = (
    secs, zone, format = "cccc, dd LLL yyyy' | local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export const handleIconWeather = (data) => `https://openweathermap.org/img/wn/${data}@2x.png`