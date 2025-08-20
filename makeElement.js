export default function makeElement( elementName, properties ){
    if (elementName === null || elementName.length === 0) throw Error("Missing Elementname");
    const element = document.createElement(elementName);
    Object.entries(properties).foreach((prop) => {
        const [propName, propValue] = prop;
        element[propName] = propValue;
    });
    return element;
}