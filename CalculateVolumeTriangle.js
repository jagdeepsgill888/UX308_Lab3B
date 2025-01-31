// calculate the volume of an equilateral triangle prism from the length of one side of the triangle and the length of the flat edge

function CalculateVolumeTriangle(length, height) {
  //   length = 2;
   // height = 10;
    let volume = (Math.sqrt(3)/4) * (length **2) * height;
    return volume;
} 

//console.log(`The volume of the equilateral triangle prism is ${CalculateVolumeTriangle(2, 10)}`);

export { CalculateVolumeTriangle }



//√3/4)a2 × h