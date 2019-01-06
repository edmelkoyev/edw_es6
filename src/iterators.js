const xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.info('___for');
for (let i = 0; i < xmen.length; i += 1) {
  console.log(xmen[i]);
}

console.info('___for...in');
// ESLint: Use Object.{keys,values,entries}
Object.keys(xmen).forEach((key) => {
  console.log(xmen[key]);
});

console.info('___forEach');
xmen.forEach(entry => console.log(entry));

console.info('___for...of - prohibited by airbnb');
/*
iterators/generators require regenerator-runtime, which is too heavyweight f
or this guide to allow them.
Separately, loops should be avoided in favor of array iterations.eslint(no-restricted-syntax)

for (let xman of xmen) {
  console.log(xman);
}
*/
const iterator = xmen[Symbol.iterator]();
let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
