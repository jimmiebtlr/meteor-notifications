Template.notifyIcon.count = function(){
  return Notifications.find({'$and': [{'to': Meteor.userId()},{'accepted': false},{'declined': false}]}).count();
}

Template.notifications.notificationsCount = function(){
  return Notifications.find({'$and': [{'to': Meteor.userId()},{'accepted': false},{'declined': false}]}).count();
}

Template.notifications.notifications = function(){
  return Notifications.find({'$and':[{'to': Meteor.userId()},{'accepted': false},{'declined': false}]});
}

Template.notification.events({
  'click .accept': function(){
    Notifications.update({'_id': this._id},{'$set': {'accepted': true}});
  },
  'click .decline': function(){
    Notifications.update({'_id': this._id},{'$set': {'declined': true}});
  }
});

var notificationSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

Meteor.startup(function(){
  notificationSubs.subscribe('Notifications');
});


