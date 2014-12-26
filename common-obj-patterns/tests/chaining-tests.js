var Calc = require('../chaining').Calc;

exports['Should return 9'] = function(test) {
  var callback = function(result) {
    console.log(result);
  };

  calc = new Calc(0)
    .add(1)
    .add(2)
    .multiply(3);

  test.equals(calc.equals(), 9);
  test.done();
};
