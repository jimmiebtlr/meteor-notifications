Meteor.publish('Notifications', function(){
  return Notifications.find({$or: [{from: this.userId}, {to: this.userId}] });
});

Meteor.publish('NotificationRelatedUsers', function(){
  return Notifications.find({$and: [{$or: [{from: this.userId}, {to: this.userId}]},{accepted: false,declined: false}] });
});

Notifications.after.update(function(userId, doc, fieldNames, modifier, options){
  if( doc.accepted && NotificationSettings[doc.notifyType] !== undefined && NotificationSettings[doc.notifyType].afterAccept !== undefined ){
    NotificationSettings[doc.notifyType].afterAccept(doc);
  }
});
