import Ember from 'ember';

var Message = Ember.Object.extend({
  
});

Message.buildNew = function(sender, msg) {
  return Message.create({
    sender: sender,
    content: msg
  });
};

export default Message;
