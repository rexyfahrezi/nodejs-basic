const _ = require('lodash');
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(process.NODE_ENV || "production");
console.log(myOddEvenArray);