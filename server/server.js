Meteor.publish('Notifications', function(){
  var userIds = [];  
  _.each( Notifications.relatedToUser(this.userId).fetch(), function( n ){
    userIds.push( n.to );
    userIds.push( n.from );
  });
  console.log( Notifications.relatedToUser(this.userId).fetch() );
  console.log( userIds );
  return [
    Meteor.users.find({'_id': {$in: userIds}}),
    Notifications.relatedToUser(this.userId)
  ];
});

Notifications.after.update(function(userId, doc, fieldNames, modifier, options){
  if( doc.accepted && NotificationSettings[doc.notifyType] !== undefined && NotificationSettings[doc.notifyType].afterAccept !== undefined ){
    NotificationSettings[doc.notifyType].afterAccept(doc);
  }
});
