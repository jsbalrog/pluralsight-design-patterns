define(['backbone'], function(B) {
  var Model = B.Model.extend({
    defaults: {
      release: 2014
    }
  });

  var View = B.View.extend({
    tagName: 'li',
    template: _.template('<%= title %> (<%= release %>)'),
    initialize: function() { this.render(); },
    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.append(html);
    }
  });

  return {
    Model: Model,
    View: View
  };
});
