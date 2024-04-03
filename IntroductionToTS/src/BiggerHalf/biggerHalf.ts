const biggerHalf = (numbers: Array<number>): Array<number> => {
  if (!numbers)
    throw new Error("Invalid input. Please provide and array with numbers");
  const sortedNumbers: Array<number> = numbers.sort(
    (num1, num2) => num1 - num2
  );
  const sliceStart: number = Math.floor(sortedNumbers.length / 2);
  const sliceStop: number = sortedNumbers.length;
  return sortedNumbers.slice(sliceStart, sliceStop);
};

const init = (): void => {
  try {
    console.log(biggerHalf([4, 7, 2, 5]));
    console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
  } catch (error: unknown) {
    console.log(error);
  }
};

init();
