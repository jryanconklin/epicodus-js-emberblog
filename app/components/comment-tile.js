import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    }

//End
  }
});
