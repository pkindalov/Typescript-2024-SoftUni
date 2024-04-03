const makeCalc = (num1: number, num2: number, operation: string): number => {
  if (!operation) {
    throw new Error(
      "Invalid operation. There is a problem with operation parameter"
    );
    return -1;
  }
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Cannot divide on zero.");
        return -1;
      }
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      throw new Error(
        'There is no such operation. Please choose on the following "+", "-", "*", "/", "%", "**"'
      );
      return -1;
  }
};

const mathOperations = (
  num1: number,
  num2: number,
  operation: string
): number => {
  const possibleOperations = ["+", "-", "*", "/", "%", "**"];
  if (!possibleOperations.includes(operation)) {
    throw new Error(
      "This operation doesn't exists. You can try one of these '+', '-', '*', '/', '%', '**'"
    );
  }
  const operationResult = makeCalc(num1, num2, operation);
  return operationResult;
};

const doMath = (): void => {
  try {
    console.log(mathOperations(5, 6, "+"));
    console.log(mathOperations(3, 5.5, "*"));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return;
    }
    console.log(error);
  }
};

doMath();
