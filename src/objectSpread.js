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
// const port = 8080;
// const res = { ...defaults, ...opts, port };

console.log(res);
