var book = {
  _name: '',
  _price: 0,
  _priceChanged: [], // Array of observeable functions

  name: function() {
    if(arguments.length > 0) {
      this._name = arguments[0];
    } 
    return this._name;
  },

  price: function() {
    if(arguments.length > 0) {
      this._price = arguments[0];
      for(var j = 0; j < this._priceChanged.length; j++) {
        this._priceChanged[j](this);
      }
    }
    return this._price;
  },

  onPriceChanged: function(callback) {
    this._priceChanged.push(callback);
  }
};

var b = book;
b.name('Javascript, The Good Parts');
b.price(23.99);

console.log(b.name());
console.log(b.price());

// Set some observeables
b.onPriceChanged(function(b) {
  console.log('The book price has changed to: ' + b.price());
});

b.price(19.99);
b.price(200);
