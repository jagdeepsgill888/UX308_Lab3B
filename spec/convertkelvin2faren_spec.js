import { convertKelvin2Faren } from '../convertKelvin2Faren.js'
//given a temperature in kelvin convert to fahrenheit
describe("A suite", function() {
    it("What is 2 Kevin in fahrenheit", function() {
      let fahrenheit = convertKelvin2Faren(2);
      expect(fahrenheit).toBe(-456.07);
    });
  });
  
  