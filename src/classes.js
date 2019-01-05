class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(`${this.name} goes ${this.voice}`);
  }
}

class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say();
    this.canFly = canFly;
  }

  say() {
    console.log(`Bird ${this.name} doesn't like to talk`);
  }
}

// duck -> Bird.prototype ->
// Animal.protoype ->
// Object.protoype -> null
const duck = new Bird('Duck', 'quack', true);

duck.say();
