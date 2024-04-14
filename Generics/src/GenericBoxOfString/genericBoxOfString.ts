class Box<T> {
  private data: T;
  constructor(data: T) {
    this.data = data;
  }
  toString() {
    console.log(`"${this.data} is of type ${typeof this.data}`);
  }
}

const genericBoxOfStrong = <T>(data: T): void => {
  const box = new Box(data);
  box.toString();
};

genericBoxOfStrong(["test"]);
genericBoxOfStrong(20);
genericBoxOfStrong("Hello");
