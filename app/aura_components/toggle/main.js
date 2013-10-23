define([], function() {
  return {
    initialize: function() {
      this.render();

      var self = this;
      $('#remove-child').on('click', function() {
        self.sandbox.emit('remove.child');
      });
      $('#add-child').on('click', function() {
        self.sandbox.emit('add.child');
      });
    },

    render: function() {
      this.html('<button id="remove-child">Remove Child</button><button id="add-child">Add Child</button>');
    }
  };
});