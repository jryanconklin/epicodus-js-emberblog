import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment) {
      console.log('meow');
      this.sendAction('deleteComment', comment);
    }
  }
});
