/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalTwo = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/play-modal-two.hbs'],

        events: {
          "touchend .close-cross": "closeModal"
        },

        onRender: function() {
          console.log ("rendering modal 2");
        },

        onShow: function() {
          $('.modal-image-wrapper').imagesLoaded()
          .fail( function( instance ) {
            $('#offline-message').removeClass('hidden');
            $("img").hide();
            console.log('wack wack');
          })
        },

        onDestroy: function() {
          $("img").show();
          $('#offline-message').addClass('hidden');
        },

        closeModal: function(e) {
          console.log('closing modal');
          //get the next question
          BarjeelApp.PlayModule.mainLayout.modalsRegion.$el.hide();
        }
    });
})();
