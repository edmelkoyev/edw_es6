const arr1 = [1, 2, 3];
const arr2 = [4, 7, 1];

const res = Math.max(...arr1, ...arr2);
console.log(res);

arr2.push(55, 56);
const shallowCopy = [...arr1, 41, 42, ...arr2];
// note: shallowCopy uses arr2 with 5 elements [4, 7, 1, 55, 56]
// and does not elements, added later
arr2.push(75, 77);
console.log(shallowCopy);
console.log(arr2);
