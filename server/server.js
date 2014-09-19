Meteor.publish('Notifications', function(){
  return [
    Notifications.relatedToUser(this.userId)
  ];
});

Notifications.after.update(function(userId, doc, fieldNames, modifier, options){
  if( doc.accepted && NotificationSettings[doc.notifyType] !== undefined && NotificationSettings[doc.notifyType].afterAccept !== undefined ){
    NotificationSettings[doc.notifyType].afterAccept(doc);
  }
});
