const evaluateTest = (num1, num2, sign) => {
  if (num1 && num2 == undefined) throw ("Two  Numbers are empty");
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    default:
      return 0;
  }
}
module.exports = evaluateTest;