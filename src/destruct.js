const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27,
};

const { firstName, lastName } = person;
console.log(`Hello ${firstName} ${lastName}`);

const person2 = {
  name: {
    first: 'John',
    last: 'Brown',
  },
  age: 29,
};

const {
  name: { first: fName, last: lName },
} = person2;
console.log(`Hello ${fName} ${lName}`);

function connect({ host = 'localhost', port = 12345, user = 'guest' } = {}) {
  console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({ port: 1111 });
connect({});
connect();

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
};

const { duck, ...others } = dict;
console.log(duck);
console.log(others);
