define([], function() {
  return {
    initialize: function() {
      this.render();
    },
    render: function() {
      this.html(this.options.innerHtml);
    }
  };
});