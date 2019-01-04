// 1. Object.setPrototypeOf() - IS not recommended
// 2. in constructor res = Object.create(_PROTO_)
// 3. ES5 pattern with new

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function a() {
  console.log(`${this.name} goes ${this.voice}`);
};

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();
cat.say();
