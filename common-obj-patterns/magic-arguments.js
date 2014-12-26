var myFunc = function(a, b, c) {
  return a + b + c;
};

var myMagicFunc = function() {
  var x = 0;
  for(var i=0; i < arguments.length; i++) {
    x = x + arguments[i];
  }
  return x;
};

exports.myFunc = myFunc;
exports.myMagicFunc = myMagicFunc;
