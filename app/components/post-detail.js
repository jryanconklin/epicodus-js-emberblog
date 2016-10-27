import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveComment(comment) {
      this.sendAction('saveComment', comment);
    }


//End
  }
});
