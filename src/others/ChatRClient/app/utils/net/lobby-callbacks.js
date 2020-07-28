import User from 'chatr/models/chat-user';

import Message from 'chatr/models/chat-message';

class LobbyCallbacks {
  constructor(signalr, ctrl) {
    this.signalr = signalr;
    this.ui = ctrl;
  }

  lobbyEntered(info) {
    var topic = info.Topic;

    var users = [];

    info.Users.forEach(function(user) {
      user = User.buildNew(user.Name);

      users.push(user);
    });

    this.ui.initRoom(users, [], topic);
  }

  chatSent(chat) {
    var sender = chat.Sender;
    var msg = chat.Message;

    msg = Message.buildNew(sender.Name, msg);

    this.ui.addMessage(msg);
  }
}

export default LobbyCallbacks;
