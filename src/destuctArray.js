const fib = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c] = fib;
console.log(a, b, c);

const [, k, , , l] = fib;
console.log(k, l);

const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const people = ['Chris', 'Sandra'];
const [n1, n2, n3 = 'guest'] = people;
console.log(n1, n2, n3);

const people2 = ['Chris', 'Sandra', 'Bob'];
const [m1, ...others] = people2;
console.log(m1);
console.log(others);

// task: as result we need to have plain array of animals, who use 'squeak'
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
};
const SQUEAK = 'squeak';
const res = Object.entries(dict)
  .filter(([, val]) => val === SQUEAK)
  .map(([key]) => key);
console.log(res);

const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 15],
  },
};
const {
  coordinates: {
    start: [startX, startY],
    end: [endX, endY],
  },
} = shape;
console.log(startX, startY, endX, endY);
