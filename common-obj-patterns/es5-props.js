function Book() {
  var name = '';

  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },
    set: function(val) {
      console.log("Changing: " + val);
      name = val;
    }
  });
}

var b = new Book();
b.name("Ted");
