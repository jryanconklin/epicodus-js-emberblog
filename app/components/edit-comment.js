import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editComment(comment) {
      var params = {
        critic: this.get('critic'),
        utterance: this.get('utterance')
      };
      this.sendAction('editComment', comment, params);
    }

// End
  }
});
