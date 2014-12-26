var Calc = function(start) {
  this.add = function(x) {
    start = start + x;
    return this;
  };

  this.multiply = function(x) {
    start = start * x;
    return this;
  };

  this.equals = function() {
    return start;
  };
};


exports.Calc = Calc;
