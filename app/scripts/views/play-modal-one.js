/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalOne = Backbone.Modal.extend({
        template: JST['app/scripts/templates/play-modal-one.hbs'],
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
