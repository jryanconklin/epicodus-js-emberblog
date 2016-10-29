import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },

    editComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    }

//End
  }
});
