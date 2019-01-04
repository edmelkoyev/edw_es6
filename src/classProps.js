class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      this.count += Counter.incrementStep;
    };
  }
}

Counter.incrementStep = 2;
Counter.incrementAll = function x(arr) {
  arr.map(c => c.increment());
};

const cnt = new Counter();
console.log(cnt.count);
cnt.increment();
console.log(cnt.count);
