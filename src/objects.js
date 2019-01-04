const x = 1;
const y = 2;

const p = {
  x,
  y,
  draw(zoom = 1) {
    const res = [this.x, this.y].map(val => val * zoom);
    return res;
  },
};
console.log(p.draw(2));

// Prefix for object property names
const prefix = '_tmp_';
const data = {
  [`${prefix}name`]: 'Bob',
  [`${prefix}age`]: 23,
};
console.log(data);

// Combination of propertioes
const defaults = {
  host: 'localhost',
  dbname: 'blog',
  user: 'Guest',
};
const opts = {
  user: 'John',
  pwd: 'Utopia21',
};
const res = Object.assign({}, defaults, opts);
console.log(res);

// Shallow copy of object
const person = {
  name: 'Bob',
  friends: ['Mark', 'Jason'],
};

const pShallowCopy = Object.assign({}, person);
person.name = 'Nikki';
person.friends.push('Jane');

console.log(pShallowCopy);
