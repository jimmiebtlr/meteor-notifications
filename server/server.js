Meteor.publish('Notifications', function(){
  var userIds = [];  
  _.each( Notifications.relatedToUser(this.userId).fetch(), function( n ){
    userIds.push( n.to );
    userIds.push( n.from );
  });
  console.log( userIds );
  return [
    Notifications.relatedToUser(this.userId),
    Meteor.users.find({'_id': {$in: userIds}})
  ];
});

Notifications.after.update(function(userId, doc, fieldNames, modifier, options){
  if( doc.accepted && NotificationSettings[doc.notifyType] !== undefined && NotificationSettings[doc.notifyType].afterAccept !== undefined ){
    NotificationSettings[doc.notifyType].afterAccept(doc);
  }
});
