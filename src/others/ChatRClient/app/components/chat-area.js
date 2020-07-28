import Ember from 'ember';

export default Ember.Component.extend({
  onMessagesChanged: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var list = Ember.$('.chatr-messagelist');
      list.scrollTop(list[0].scrollHeight);
    });
  }.observes('messages.[]'),

  actions: {
    sendChat: function() {
      var msg = this.get('chatInput');
      this.set('chatInput', "");
      this.sendAction("onSendChat", msg);
    }
  }
});

