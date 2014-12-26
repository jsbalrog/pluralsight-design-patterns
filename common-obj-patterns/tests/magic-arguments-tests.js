var myFunc = require('../magic-arguments').myFunc;
var myMagicFunc = require('../magic-arguments').myMagicFunc;

exports['Can pass two arguments'] = function(test) {
  var result = myMagicFunc(1, 2);

  test.equal(result, 3);
  test.done();
};

exports['Can pass three arguments'] = function(test) {
  var result = myMagicFunc(1, 2, 3);

  test.equal(result, 6);
  test.done();
};

exports['Can pass four arguments'] = function(test) {
  var result = myMagicFunc(1, 2, 3, 4);

  test.equal(result, 10);
  test.done();
};

