Ember-LoadMoreMixin
===================

Mixin for Limiting Model from Controller and Appending at will.

1.Embed ember.loadmore.js script tag after ember.js file but before you application.

2. Set up your Route however you want, ember-data, ember-model, etc. (I name my my ember apps as App)

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    //whatever you need to do here/
  }
});

3. Set up your controller, whether you have sort properties, etc, all you need to do is set your desired perPage property.
This defaults to 1 if you do not declare it

App.ApplicationController = Ember.ArrayController.extend(Ember.LoadMoreMixin,{
  perPage: 3 //This will load 3 records of the model at time
});

4. In your template you can add your button anywhere, just bind the action 'loadMore' and target it to your controller.
You can disable loading when reaching the length of your model by binding the disabled attr to the hasMore function.
<button {{bind-attr disabled=hasMore}} {{action "loadMore" target="controller"}}>Load More Content</button>
