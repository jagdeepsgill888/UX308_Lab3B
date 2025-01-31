// give a temperature in kelvin convert to fahrenheit

function convertKelvin2Faren(kelvin){
    let fahrenheit = ( kelvin - 273.15) * 9/5 + 32;
    return fahrenheit;
}

//console.log(`2 kelvin is ${convertKelvin2Faren(2)} fahrenheit`);

export { convertKelvin2Faren }