import { windspeed2Descript } from '../windspeed2Descript.js'
//given a temperature in kelvin convert to fahrenheit
describe("A suite", function() {
    it("what does 2km/h in the Beaufort Wind Scale means", function() {
      let Descript = windspeed2Descript(1);
      expect(Descript).toBe("Calm");
    });
    it("what does 6km/h in the Beaufort Wind Scale means", function() {
      let Descript = windspeed2Descript(6);
      expect(Descript).toBe("Light air");
    });
  });
  
  