require.config({
  paths: {
    eventemitter: 'bower_components/eventemitter2/lib/eventemitter2',
    aura: 'bower_components/aura/lib',
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore'
  }
});

require(['aura/aura'], function (Aura) {
  'use strict';

  var app = new Aura({debug: true});
  /*
  Add your extensions here.
  app.use('extensions/sample');
  */
  app.start({ components: 'body' }).then(function () {
    app.sandbox.on('get.random', function(data) {
      data.callback.apply(this, [Math.random()]);
    });
    console.log('Aura started...');
  });
});
