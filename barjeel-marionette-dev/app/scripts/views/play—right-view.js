/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayRightView = Backbone.Marionette.ItemView.extend({

    		initialize: function(){
    			console.log ("Right view initialised" + JSON.stringify(BarjeelApp.PlayModule.gameState));
    		},

        template: JST['app/scripts/templates/play—right-view.hbs'],

        events: {
					"touchend .next": "nextQuestion",
				},

			nextQuestion: function(e) {
				console.log ("Next QUESTION FIRED: " + JSON.stringify(BarjeelApp.PlayModule.gameState));
				var questionCount =  BarjeelApp.PlayModule.gameState.get ("questionCount");
				questionCount += 1;
				BarjeelApp.PlayModule.gameState.set(("questionCount"), questionCount); 
				this.remove();

				var currentQuestion = BarjeelApp.PlayModule.newCollection.models[questionCount];
				BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayQuestionView({
						model: currentQuestion
					}));
			}

    });

})();
