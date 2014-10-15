App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

//Create your controller 
App.IndexController = Ember.ArrayController.extend(Ember.LoadMoreMixin,{
  perPage: 2
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'green', 'purple', 'indigo', 'pink'];
  }
});
