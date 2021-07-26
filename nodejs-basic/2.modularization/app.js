const coffee = require('./lib/coffee');
const { lastName, firstName } = require('./lib/user');

console.log(coffee);
console.log(firstName, lastName);


const Tiger = require('./lib/Tiger')// TODO 3
const Wolf = require('./lib/Wolf')// TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);