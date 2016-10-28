import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveComment(comment) {
      this.sendAction('saveComment', comment);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    }

//End
  }
});
