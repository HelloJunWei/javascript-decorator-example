@superhero
class MySuperHero {};

function superhero (target) {
  target.superhero = true;
  target.power = 'flight';
};

console.log(MySuperHero.superhero);
// true
console.log(MySuperHero.power);
// flight

class Cat {
  @readonly
  meow () {
    console.log('meow');
  }
}

function readonly (target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

var cat = new Cat();
cat.meow();
// meow
cat.meow = () => { console.log('I want lasagne')};
// 沒辦法更換

cat.meow();
// meow