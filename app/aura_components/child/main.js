define([], function() {
  return {
    initialize: function() {
      // this.render();
      this.getRandom();
    },
    // uses sandbox to get data. Supplied callback to handle return data.
    getRandom: function() {
      this.sandbox.emit('get.random', {
        callback: _.bind(function(number) {
          this.render(number);
        }, this)
      });
    },
    render: function(number) {
      this.html(this.options.innerHtml + number);
    }
  };
});