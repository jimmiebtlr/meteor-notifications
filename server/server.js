Meteor.publish('Notifications', function(){
  return Notifications.relatedToUser(this.userId);
});
