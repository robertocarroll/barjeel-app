BarjeelApp.module("PlayModule", function(PlayModule, BarjeelApp, Backbone, Marionette, $, _){

	PlayModule.addInitializer(function() {
     
				PlayModule.newCollection = new Barjeel.Collections.PlayCollection();
				
				PlayModule.newCollection.fetch({
				    success : function(MyCollectionAllQuestions, response, options) {        
							console.log ("fetch success");						
			    	}
				});
    });


	PlayModule.startPlay = function() {

		var playModel = new Barjeel.Models.LandingModel({title: 'play', description: 'Test your knowledge and explore a network of connections hidden within Barjeel’s vast art collection'});	
	  var newLandingPlayView = new Barjeel.Views.LandingView({model: playModel});	
	  BarjeelApp.allRegion.show(newLandingPlayView);

	}	

	PlayModule.startQuiz = function() {

			console.log ("play quiz started");

			PlayModule.mainLayout = new Barjeel.Views.PlayMainView();

			PlayModule.gameState = new Barjeel.Models.PlayGameStateModel();
  
  	  var questionCount =  PlayModule.gameState.get ("questionCount");
			var livesCount =  PlayModule.gameState;
			var currentQuestion = BarjeelApp.PlayModule.newCollection.models[questionCount];

			BarjeelApp.allRegion.show(BarjeelApp.PlayModule.mainLayout);

			BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayQuestionView({
				model: currentQuestion
			}));

			BarjeelApp.PlayModule.mainLayout.livesRegion.show(new Barjeel.Views.PlayLivesView({
				model: livesCount 
			}));

			BarjeelApp.PlayModule.mainLayout.livesRegion.$el.show();
  }	

});