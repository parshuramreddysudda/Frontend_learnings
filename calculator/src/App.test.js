

const evaluateTest=require("./evalute")
describe("Evaluate Function", () => {

  test('it should return sum ', () => {
    const input1 = evaluateTest(12, 34, "+");
    const output1 = 46;
    expect(input1).toEqual(output1);
  })
  test('should return Sub of values ', () => {
    const input2 = evaluateTest(35, 52, "-");
    const output2 = -17;
    expect(input2).toEqual(output2);
  })
  test('should return Negative value', () => {
    const input3 = evaluateTest(-32, 53, "-");
    const output3 = -85;
    expect(input3).toEqual(output3);
  })



});