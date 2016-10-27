import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    saveComment() {
      var params = {
        critic: this.get('critic'),
        utterance: this.get('utterance'),
        post: this.get('post')
      };
      this.set('critic', '');
      this.set('utterance', '');
      this.sendAction('saveComment', params);
    }

//End
  }
});
