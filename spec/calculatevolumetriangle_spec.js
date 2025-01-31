import { CalculateVolumeTriangle } from '../CalculateVolumeTriangle.js'
//calculate the volume of an equilateral triangle prism from the length of one side of the triangle and the length of the flat edge
describe("A suite", function() {
    it("What the volume of a equilateral triangle prism", function() {
      let volume = CalculateVolumeTriangle(2,10);
      expect(volume).toBe(17.32050807568877);
    });
  });
  
  