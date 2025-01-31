// 2) convert a windspeed to  a description using The Beaufort Wind Scale

function windspeed2Descript(windspeed) 
{
    let Descript = "Calm";
    if(windspeed >= 2) { 
        Descript = "Light air";
    } else if (windspeed >= 6) {
        Descript = "Light breeze";
    }
return Descript; 

}

//console.log(` 2km/h in The Beaufort Wind Scale means its ${windspeed2Descript(3)}`);

export { windspeed2Descript }
