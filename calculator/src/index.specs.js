import index from './index'

const evaluateTest=(num1,num2,sign)=>{
        
    switch (sign) {
      case "+":
        return num1+num2;
      case "-":
        return num1-num2;
      default:
        return 0;
    }

  }
describe("Evaluate Function", () => {
    
    test('it should return sum or sub of values by (sign) ', () => {
        const input1=[12,34,"+"];
        const input2=[35,52,"-"];
        const input3=[-32,53,"-"];

        const output1=[46];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(evaluateTest(input1)).toEqual(output1);
        
    })
    
  });