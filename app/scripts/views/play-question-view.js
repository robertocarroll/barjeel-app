/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayQuestionView = Backbone.Marionette.ItemView.extend({

    		initialize: function(){
    			console.log ("Question view initialised: " + JSON.stringify(BarjeelApp.PlayModule.gameState));
    		},

        template: JST['app/scripts/templates/play-question-view.hbs'],

        onDomRefresh: function(){ 
			  	$('.content').animate({ scrollTop: 0 }, 100);
			  	console.log ('scrolled content');
			  },	

        events: {
        	"touchend .questionOption": "checkAnswer"
				},

				getSelected: function() {
					return this.model.get("selected");
				},

				select: function (value) {
					this.model.set("selected", value);
				},

				checkAnswer: function(e) {
					$('.questionOption').not(active).removeClass('active');
					var active = $(e.currentTarget);
					active.addClass('active');

					var answer = active.data('answer');

					this.select(parseInt(answer, 10));

					var currentSelection = this.model.get("selected"),
					correctAnswer = this.model.get("correctAnswer");

					if (currentSelection === correctAnswer) {

						var counterTemp = BarjeelApp.PlayModule.gameState.get ("correctCounter");
						counterTemp +=1;
						BarjeelApp.PlayModule.gameState.set(("correctCounter"), counterTemp); 
						
						this.model.set("correct", true);
					
						var questionCount =  BarjeelApp.PlayModule.gameState.get ("questionCount");
						var currentQuestion = BarjeelApp.PlayModule.newCollection.models[questionCount];

						BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayRightView({
								model: currentQuestion
							}));
					}

					else if (currentSelection !== correctAnswer) {
						var livesTemp = BarjeelApp.PlayModule.gameState.get ("gamelives");
						livesTemp -=1;
						BarjeelApp.PlayModule.gameState.set(("gamelives"), livesTemp); 

						this.model.set("correct", false);
						this.checkLives();
						
					}
				},

					checkLives: function() {

						var livesTemp = BarjeelApp.PlayModule.gameState.get ("gamelives");

							if (livesTemp > 0) {
								BarjeelApp.PlayModule.mainLayout.questionRegion.$el.hide();
								BarjeelApp.PlayModule.mainLayout.wrongRegion.show(new Barjeel.Views.PlayWrongView());
								BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.show();
							}

							else {
								var livesCount =  BarjeelApp.PlayModule.gameState;
								
								BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayGameOverView({
									model: livesCount
								}));

								BarjeelApp.PlayModule.mainLayout.livesRegion.$el.hide();
							}
					}

    });

})();
