import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editComment(comment) {
      debugger;
      console.log(this);
      var params = {
        critic: this.get('critic'),
        utterance: this.get('utterance')
      };
      this.sendAction('editComment', comment, params);
    }

// End
  }
});
