const showEvenPositionEls = (numsStrArr: Array<string>): string => {
  const filteredNums: Array<string> = numsStrArr.filter((num, index) => {
    if (index % 2 === 0) return num;
  });

  return filteredNums.join(" ");
};

console.log(showEvenPositionEls(["20", "30", "40", "50", "60"]));
console.log(showEvenPositionEls(["5", "10"]));
