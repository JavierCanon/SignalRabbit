import Ember from 'ember';

import RealNet from 'chatr/utils/net/chat-realnet';

export default Ember.Route.extend({
  setupController: function(controller) {
    //controller.initRoom([], []);

    var signalr = this.signalr;
    
    var net = new RealNet(signalr);
    controller.set('realnet', net);
    
    signalr.configureHubs(controller);
  }
});
