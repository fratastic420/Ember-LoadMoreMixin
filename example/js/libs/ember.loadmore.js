Ember.LoadMoreMixin = Ember.Mixin.create({
   end: function() {
      return this.get('perPage');
   }.property('perPage'),
   sliceContent: null,
   totalCount: function() {
      return this.get('content').get('length');
   }.property('content.@each'),
   hasMore: function() {
      return this.get('totalCount') <= this.get('end'); 
   }.property('totalCount', 'end'),
   updatedContent: function (){
      var models = this.get('content'), slice, end = this.get('end') ? this.get('end') : 1;
      this.set('sliceContent', models);
      slice = this.get('sliceContent');
      if (end > this.get('totalCount')) end = this.get('totalCount');
      slice = slice.slice(0, end);
      this.set('sliceContent', slice);
      return slice;   
   }.property('content.@each', 'perPage', 'end', 'sliceContent'),
   actions: {
      loadMore: function() {
         var end = this.get('end'), perPage = this.get('perPage') ? this.get('perPage') : 1;
         end += perPage;
         this.set('end', end);   
      }
   }
});