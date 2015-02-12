/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayWrongView =  Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play—wrong-view.hbs'],

         events: {
						"click .try-again": "tryAgain",
					},

					tryAgain: function(e) {
						BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.hide();
						BarjeelApp.PlayModule.mainLayout.questionRegion.$el.show();
					}

    });

})();
