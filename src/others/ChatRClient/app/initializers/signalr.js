import SignalRConnection from 'chatr/utils/net/chatr-realtime';

export function initialize(container, application) {
  var realtime = new SignalRConnection('http://chatr1.gear.host/signalr');

  application.register('realtime:signalr', realtime, { instantiate: false });

  application.inject('route:chat', 'signalr', 'realtime:signalr');
}

export default {
  name: 'signalr',
  initialize: initialize
};
