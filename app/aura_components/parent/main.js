define([], function() {
  return {
    initialize :function() {
      this.sandbox.on('add.child', _.bind(this.render, this));
      this.sandbox.on('remove.child', _.bind(this.close, this));
    },

    close: function() {
      this.$el.empty();
    },
    render: function() {
      this.html('<div data-aura-component="child" data-aura-inner-html="Child of Parent"></div><div data-aura-component="child2" data-aura-inner-html="Second Child of Parent"></div>');
    }
  };
});