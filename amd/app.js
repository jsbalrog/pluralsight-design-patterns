var Calc = require('./calc.js');

var c = Calc
    .add(1,2)
    .multiply(3);

console.log(c.equals());
