/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalTwo = Backbone.Modal.extend({
        template: JST['app/scripts/templates/play-modal-two.hbs'],
        submitEl: '.modal-icon',
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
        }
    });


})();
