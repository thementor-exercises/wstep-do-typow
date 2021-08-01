
console.log(this);

const Car = function (model) {
  this.model = model;
  this.engine = "V6";
  this.gear = 6;
  this.gearShaft = Symbol("Manual");
  this.warmChairs = true;
  console.log(this.gear);
};

Car.prototype = {
  whatSoundDoesEngineMake: function() {
    return "Brrr...";
  },
  howManyMoreGearsWhouldYouLike: function(gearToAdd) {
    this.gear = this.gear + gearToAdd;
  },
  changeModel: function(model) {
    this.model = model;
  }
};

const audi = new Car("Audi");
audi.howManyMoreGearsWhouldYouLike(1);
const whatSoundDoesEngineMake = audi.whatSoundDoesEngineMake();

console.log(audi);
console.log(whatSoundDoesEngineMake);

const bmw = new Car("BMW");

console.log(bmw);
