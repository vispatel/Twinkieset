TwinkieSetApp.Views.EditForm = Backbone.View.extend({
  template: JST['albums/edit'],
  className: 'form-modal',

  initialize: function () {

  },

  events: {
    "click .submit-edit-album": "editAlbum",
    "click .cancel-edit-album": "hideForm"
  },

  hideForm: function () {
    event.preventDefault();
    this.$el.hide();
  },

  editAlbum: function (event) {
    event.preventDefault();
    var attrs = $('form').serializeJSON();
    var newAlbum = this.model;
    newAlbum.save(attrs, {
      success: function () {
        this.collection.add(newAlbum);
        newAlbum.fetch(); // do this to ensure string_date is rendered
        this.$el.hide();
      }.bind(this),
      error: function (args) {
        console.log('error');
      }
    });
  },

  render: function () {
    var content = this.template({
      album: this.model
    });
    this.$el.html(content);
    return this;
  }

});