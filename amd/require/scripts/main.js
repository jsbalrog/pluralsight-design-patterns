require.config({
  paths: {
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
    'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
  },

});

require(['movie'], function(Movie) {
  var movie = new Movie.Model({
    release: 1996,
    title: 'Contact'
  });

  var movieView = new Movie.View({
    model: movie
  });

  $('body').append(movieView.el);
});
