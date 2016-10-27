import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    // saveComment() {
    //   var params = {
    //     critic: this.get('critic'),
    //     utterance: this.get('utterance')
    //   };
    //   this.set('addNewComment', false);
    //   this.sendAction('saveComment', params);
    // }

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    }

//End
  }
});
