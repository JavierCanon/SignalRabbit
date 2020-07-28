import Ember from 'ember';

import Room from 'chatr/models/chat-room';

import Message from 'chatr/models/chat-message';

import User from 'chatr/models/chat-user';

export default Ember.Controller.extend({
  showLogin: true,

  showChat: function() {
    var showLogin = this.get('showLogin');
    return !showLogin;
  }.property('showLogin'),
  
  initRoom: function(users, messages, topic) {
    var room = Room.buildNew(users, messages, topic);

    this.set('room', room);

    this.set('showLogin', false);
  },

  addMessage: function(msg) {
    var room = this.get('room');

    room.addMessage(msg);
  },

  userJoin: function(user) {
    var room = this.get('room');

    room.userJoin(user);
  },

  sendNetRequest: function(fn, args) {
    var net = this.get('realnet');

    net.sendLobbyRequest(fn, args);
  },

  actions: {
    sendChat: function(msg) {
      // this.addMessage('ME', msg);
      // this.userJoin(msg);
      

      this.sendNetRequest('sendChat', msg);
    },

    joinChat: function() {
      var nickname = this.get('nickname');
      var net = this.get('realnet');

      if (!nickname || nickname === '') {
        this.set('formError', "error");
        return;
      } else {
        this.set('formError', '');
      }

      net.join(nickname);
    }

  }
});
