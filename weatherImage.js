import makeElement from "./makeElement.js"

const weatherImage = ( weatherCode ) => {
    const imageFileUrl = "./weathericons/weather/" + weatherCode + ".svg"
    const classNames = "weatherIcon"
    const image = makeElement("img", {src: imageFileUrl, className: classNames})
    return image;
}

export default weatherImage;