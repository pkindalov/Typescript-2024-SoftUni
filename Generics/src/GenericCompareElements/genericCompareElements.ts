class CompareElements<T> {
  private data: T[];
  private counter: number = 0;

  constructor(data: T[]) {
    this.data = data;
  }
  compare(el: T): number {
    this.data.forEach((element: T) => {
      if (el === element) this.counter++;
    });
    return this.counter;
  }
}

const genericCompareElements = <T>(data: T[], lookFor: T): void => {
  const c = new CompareElements(data);
  console.log(c.compare(lookFor));
};

genericCompareElements(["a", "b", "ab", "abc", "cba", "b"], "b");
genericCompareElements([1, 2, 3, 4, 5, 1, 1], 1);
