import Ember from 'ember';

var User = Ember.Object.extend({
  
});

User.buildNew = function(name) {
  return User.create({
    name: name
  });
};

export default User;
