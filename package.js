Package.describe({
  summary: "User notifications with navbar icon template.",
  version: "0.0.1-rc2",
  git: "https://github.com/jimmiebtlr/meteor-notifications.git"
});

Package.onUse(function(api) {
  api.use([
    'templating',
    'aldeed:autoform@2.0.0' 
    ],'client');
  api.use([
    'aldeed:simple-schema@1.0.3',
    'aldeed:collection2@1.0.0',
    'matb33:collection-hooks@0.7.6'
  ], ['client', 'server']);   
  
  api.versionsFrom('METEOR@0.9.1.1');
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
  api.export("NotificationSettings");
});
