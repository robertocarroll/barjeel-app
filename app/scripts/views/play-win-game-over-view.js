/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayWinGameOverView = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play-win-game-over-view.hbs'],

        events: {
					"touchend .play-again": "playAgain",
				},

				playAgain: function(e) {
					//set game in progress to false and add it to localstorage
					PlayModule.gameState.set({
						gameInProgress: false
					});
					localStorage.setItem('game-state', JSON.stringify(PlayModule.gameState.toJSON()));

					//restart the quiz
					BarjeelApp.PlayModule.startQuiz();
				}


    });

})();
