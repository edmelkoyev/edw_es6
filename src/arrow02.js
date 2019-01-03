const greeter = {
  greet(name) {
    console.log(`Hello ${name}`);
  },

  greetAll(names) {
    names.forEach((name) => {
      this.greet(name);
    });
  },
};

greeter.greetAll(['Bob', 'Nark', 'Pete']);
