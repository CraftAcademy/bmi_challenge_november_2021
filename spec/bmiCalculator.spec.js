const BMICalculator = require("../src/js/bmiCalculator");

subject = new BMICalculator();

describe("BMICalculator", () => {
  describe("#calculateMetric()", () => {
    describe("Thomas", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.86, weight: 105 });
      });

      it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
        expect(results.value).toEqual(30.35);
      });

      it('is expected to return a classification of "Obesity Class 1"', () => {
        expect(results.classification).toEqual("Obesity Class 1");
      });
    });

    describe("Giovanni", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.74, weight: 67 });
      });

      it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
        expect(results.value).toEqual(22.13);
      });

      it('is expected to return a classification of "Normal weight"', () => {
        expect(results.classification).toEqual("Normal weight");
      });
    });

    describe("A Fictional Person", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.70, weight: 140 });
      });

      it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
        expect(results.value).toEqual(48.44);
      });

      it('is expected to return a classification of "Extreme Obesity Class 3"', () => {
        expect(results.classification).toEqual("Extreme Obesity Class 3");
      });
    });

  });
});
