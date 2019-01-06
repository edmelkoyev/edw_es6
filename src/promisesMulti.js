function go(num) {
  return new Promise((resolve, reject) => {
    const delay = Math.ceil(Math.random() * 3000);
    console.log(num, delay);
    setTimeout(() => (delay > 2000 ? reject(new Error(num)) : resolve(num)), delay);
  });
}

const t1 = new Date();
const p1 = go(1);
const p2 = go(2);
const p3 = go(3);

Promise.race([p1, p2, p3])
  .then((val) => {
    console.info('-- RACE ---');
    console.log(val);
    const t2 = new Date();
    console.log(`Race time counter: ${t2 - t1}`);
  })
  .catch(error => console.error(error));

Promise.all([p1, p2, p3])
  .then((val) => {
    console.info('--- ALL ---');
    console.log(val);
    const t2 = new Date();
    console.log(`All time counter: ${t2 - t1}`);
  })
  .catch(error => console.error(error));
