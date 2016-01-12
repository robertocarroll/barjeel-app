/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalOne = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/play-modal-one.hbs'],

        events: {
          "touchend .close-cross": "closeModal"
        },

        onRender: function() {
          console.log ("rendering modal 1");
        },

        onShow: function() {
          $('.modal-image-wrapper').imagesLoaded()
          .fail( function( instance ) {
            $('#offline-message').removeClass('hidden');
            $(".large-image").hide();
            console.log('wack wack');
          })
        },

        onDestroy: function() {
          $(".large-image").show();
          $('#offline-message').addClass('hidden');
        },

        closeModal: function(e) {
          console.log('closing modal');
          //get the next question
          BarjeelApp.PlayModule.mainLayout.modalsRegion.$el.hide();
        }

    });

})();
