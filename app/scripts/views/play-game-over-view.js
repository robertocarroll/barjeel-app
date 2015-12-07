/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayGameOverView = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play-game-over-view.hbs'],

        events: {
					"touchend .play-again": "playAgain",
				},

				playAgain: function(e) {
					BarjeelApp.PlayModule.startPlay();
				}

    });

})();
