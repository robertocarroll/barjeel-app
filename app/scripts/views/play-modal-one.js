/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalOne = Backbone.Modal.extend({
        template: JST['app/scripts/templates/play-modal-one.hbs'],
        submitEl: '.modal-icon',
        onShow: function() {
        	var $image = $('.large-image');
        	var $offline = $('#offline-message');

        	$offline.show();

			    $image.on('load', function () {
			      $offline.hide();
			      console.log('Hiding offline message');
			    });

			    if ($image[0].complete) {
			      $image.load();
			    }

					console.log('modal window 2 showing now');
				}
    });

})();
