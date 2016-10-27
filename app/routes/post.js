import Ember from 'ember';

export default Ember.Route.extend({
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
    }

//End
  }
});
