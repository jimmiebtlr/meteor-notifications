Package.describe({
  summary: "User notifications with navbar icon template.",
  version: "0.0.1",
  git: "https://github.com/jimmiebtlr/meteor-notifications.git"
});

Package.onUse(function(api) {
  api.use([
    'templating',
    'aldeed:autoform@2.0.2',
    'meteorhacks:subs-manager@1.1.0'
    ],'client');
  api.use([
    'aldeed:simple-schema@1.0.3',
    'aldeed:collection2@2.0.0',
    'matb33:collection-hooks@0.7.6'
  ], ['client', 'server']);   
  
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles([
      'client/notifications.html',
      'client/notifications.css',
      'client/notifications.js'],
      'client'
  );
  api.addFiles([
      'lib.js'],
      ['client','server']
  );
  api.addFiles([
      'server/server.js'],
      'server'
  );

  api.export("Notifications");
  api.export("NotificationsSchema");
  api.export("NotificationSettings");
});

Package.onTest(function(api){
  api.use(['jimmiebtlr:notifications','tinytest','test-helpers'])
  api.addFiles([
    'tests/client-test.js',
  ],'client');
  api.addFiles([
      'tests/lib-test.js'],
      ['client','server']
  );
  api.addFiles([
      'tests/server-test.js'],
      'server'
  );
});
