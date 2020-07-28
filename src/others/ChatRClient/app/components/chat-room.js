import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSendChat: function(msg) {
      this.sendAction("onSendChat", msg);
    }
  }
});
