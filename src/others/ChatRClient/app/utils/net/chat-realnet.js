
class RealNet {
  constructor(signalr) {
    this.signalr = signalr;
  }


  netAction(fn, args, hub) {
    var server = this.signalr[hub].server;

    if (server[fn] === undefined) {
      console.log('bad network action ' + fn);
      return;
    }

    server[fn].call(null, args);
  }


  sendLobbyRequest(fn, args) {
    this.netAction(fn, args, 'lobby');
  }

  join(nickname) {
    this.signalr.start(nickname);
  }
}

export default RealNet;
