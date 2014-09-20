var valid = function(){ return {from: "nePT9CzsmDTqsHvTM", to: "5D9EvN59RrvqeMTpx", notifyType: "bookingSharingRequest", regarding: "wTfkG2XpZkbpxGQtA", fromMsg: "Sent to check@check.c"}; };

Tinytest.add("Notifications - valid insert", function(test){
  var context = NotificationsSchema.newContext();
  var validClean = NotificationsSchema.clean(valid());
  context.validate(validClean);
  test.equal(context.isValid(), true, "Valid object should be valid");
});
