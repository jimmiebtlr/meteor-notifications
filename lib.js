NotificationsSchema = new SimpleSchema({
  notifyType: {
    type: String
  },
  from: {
    type:SimpleSchema.RegEx.Id  
  },
  to: {
    type: SimpleSchema.RegEx.Id  
  },
  regarding: {
    type: SimpleSchema.RegEx.Id,
    optional: true
  },
  accepted: {
    type: Boolean,
    defaultValue: false
  },
  declined: {
    type: Boolean,
    defaultValue: false
  },
  displayed: {
    type: Boolean,
    defaultValue: false
  }
});

Notifications = new Meteor.Collection('Notifications');
Notifications.attachSchema( NotificationsSchema );

Notifications.allow({
  'insert': function(userId, doc){
    if( doc.accepted === true || doc.declined === true || doc.displayed === true ){
      return false;
    }
    console.log( doc );
    return (doc.from === Meteor.userId());
  },
  'update': function(userId, doc, fields, modifier){
    if( modifier.$set.to !== undefined || modifier.$set.from !== undefined ){
      return false;
    }
    return (doc.to === Meteor.userId());
  },
  'remove': function(userId, doc){
    return (doc.from === Meteor.userId());
  }
});

Notifications.relatedToUser = function( userId ){
  return Notifications.find({$and: [{$or: [{from: userId}, {to: userId}]},{accepted: false,declined: false}] });
};

NotificationSettings = {};
