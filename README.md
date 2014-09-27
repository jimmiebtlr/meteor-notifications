meteor-notifications
====================
User notifications package for meteorjs.  Intended for use to send sharing or friend requests.

    meteor add jimmiebtlr:notifications

# Setup

## New notification from client

    Notifications.insert({
      from: Meteor.userId(),
      to: destUserId,
      notifyType: "REQ_TYPE",
      regarding: Items.findOne()._id,
      fromMsg: "Remind self why I sent this"
    });

## Fill message shown to receiving user

    Notifications.before.insert(function(userId, doc){
      check( doc.from, String);
      check( doc.regarding, String );
      doc.msg = "Explain request to receiving user"      
      return doc;
    });
    

## Add to nav bar

    {{> notifyIcon}}


