import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        critic: this.get('critic'),
        utterance: this.get('utterance'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }

//End
  }
});
