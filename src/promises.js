function applyForVisa(documents) {
  console.log('Processing application ...');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random();
      return rnd > 0.5
        ? resolve(`us-P1 [${rnd}] for ${documents}`)
        : reject(new Error(`Missing document [${rnd}] in the ${documents}`));
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info(`visa ${visa} approved`);
  return new Promise((resolve) => {
    setTimeout(() => resolve(visa), 1000);
  });
}

function bookHotel(visa) {
  console.log(`Booking hotel for ${visa} ...`);
  return Promise.resolve(visa);
}

function buyTickets(booking) {
  console.log('Booking tickets...');
  console.log(booking);
}

applyForVisa({ passport: 'XVI-45' })
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error));
