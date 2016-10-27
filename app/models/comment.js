import DS from 'ember-data';

export default DS.Model.extend({
  critic: DS.attr(),
  utterance: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
