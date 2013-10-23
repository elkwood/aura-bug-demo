define(['underscore'], function (_) {
  'use strict';

  return {

    initialize: function () {
      // This listener no longer responds.
      this.sandbox.on('get.random', function(data) {
        data.callback(Math.random());
      });
      this.render();
    },

    render: function () {
      //Place render logic here
      this.html('<h1 data-aura-component="child" data-aura-inner-html="A Child"></h1><div data-aura-component="toggle"></div>');
    }
  };

});
