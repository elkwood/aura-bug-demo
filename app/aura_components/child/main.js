define([], function() {
  return {
    initialize: function() {
      // this.render();
      this.getRandom()
    },
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