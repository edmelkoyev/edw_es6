const arr = ['1', '3', '2', '4'];

const res = arr.map(el => parseInt(el, 10));
// .filter(num => num % 2)
// .reduce((max, curItem) => Math.max(max, curItem), 0);
// .reduce((sum, curItem) => sum + curItem, 0);

console.log(arr);
console.log(res);
