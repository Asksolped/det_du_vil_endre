import createWeatherImage from "./createWeatherImage.js"

const fillFields = async (fields, url) =>{
    console.log(fields);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    const data = result.properties.timeseries[0].data.instant.details;
    const imgTag = result.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
    fields.forEach((field) => {
        const value = field.querySelector(".value");
        console.log(value);
        console.log(value.children);
        switch (value.id) {
            case "airTemp":
                value.textContent = data.air_temperature;
                break;
            case "relHum":
                value.textContent = data.relative_humidity;
                break;
            case "windDir":
                value.textContent = data.wind_from_direction;
                break;
            case "windSpd":
                value.textContent = data.wind_speed;
                break;
            case "asciiWeather":
                if (value.children.length > 0 ) for (const child of value.children) child.remove();
                value.appendChild(createWeatherImage(imgTag))
                break;
            default:
                break;
        }
    })
}

export default fillFields;