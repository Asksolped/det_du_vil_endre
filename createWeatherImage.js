import makeElement from "./makeElement.js"

const createWeatherImage = ( weatherCode ) => {
    const imageFileUrl = "./weathericons/weather/svg/" + weatherCode + ".svg"
    const classNames = "weatherIcon"
    const image = makeElement("img", {src: imageFileUrl, className: classNames})
    return image;
}

export default createWeatherImage;