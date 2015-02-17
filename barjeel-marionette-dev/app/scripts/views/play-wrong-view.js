/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayWrongView =  Backbone.Marionette.ItemView.extend({

    		onRender: function() {
        console.log ("wrong view rendered");
    },

        template: JST['app/scripts/templates/play-wrong-view.hbs'],

         events: {
						"touchend .try-again": "tryAgain",
					},

					tryAgain: function(e) {
						BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.hide();
						BarjeelApp.PlayModule.mainLayout.questionRegion.$el.show();
					}

    });

})();
