BarjeelApp.module("PlayModule", function(PlayModule, BarjeelApp, Backbone, Marionette, $, _) {

	PlayModule.startPlay = function() {
		var playModel = new BarjeelApp.LandingModel({
			title: 'play',
			description: 'Test your knowledge and explore a network of connections hidden within Barjeel’s vast art collection'
		});
		var newLandingPlayView = new Barjeel.Views.LandingView({
			model: playModel
		});
		BarjeelApp.allRegion.showAnimated(newLandingPlayView, {
			animationType: 'slideLeft'
		});
	}

	PlayModule.startQuiz = function() {
		console.log("play quiz started");
		PlayModule.newCollection = new Barjeel.Collections.PlayCollection();
		PlayModule.newCollection.fetch({
			success: function(MyCollectionAllQuestions, response, options) {
				console.log("fetch questions success");
				//add data to local storage
				localStorage.setItem('barjeel-app-questions', JSON.stringify(PlayModule.newCollection.toJSON()));
				PlayModule.mainLayout = new Barjeel.Views.PlayMainView();
				PlayModule.gameState = new Barjeel.Models.PlayGameStateModel();
				//set game in progress to true and add it to localstorage
				PlayModule.gameState.set({
					gameInProgress: true
				});
				localStorage.setItem('barjeel-app-game-state', JSON.stringify(PlayModule.gameState.toJSON()));
				BarjeelApp.PlayModule.getQuestion();
			}
		});
	}

	PlayModule.resumeQuiz = function() {
		console.log("Restarting quiz");
		PlayModule.mainLayout = new Barjeel.Views.PlayMainView();
		PlayModule.gameState = new Barjeel.Models.PlayGameStateModel();
		BarjeelApp.PlayModule.getQuestion();
	}

	PlayModule.getQuestion = function() {

		//get questions from localstorage
		var newLocalCollection = new Barjeel.Collections.PlayCollection(JSON.parse(localStorage.getItem('barjeel-app-questions')));

		//get the IDs of all questions which haven't been used    
		var questions = newLocalCollection.chain()
			.filter(function(m) {
				return m.get('use')
			})
			.pluck('id')
			.value();

			console.log(questions);

		if (questions.length > 0) {
			// get random ID from question ID array     
			var rand = questions[_.random(questions.length - 1)];
			console.log('chosen ID value: ' + rand);

			//get a model from a collection, specified by ID     
			var currentQuestion = newLocalCollection.get(rand);
			console.log(currentQuestion);

			//set the status of that question to used
			currentQuestion.set("use", false);
			localStorage.setItem('barjeel-app-questions', JSON.stringify(newLocalCollection.toJSON()));

			//show the main layout
			BarjeelApp.allRegion.showAnimated(BarjeelApp.PlayModule.mainLayout, {
				animationType: 'slideLeft'
			});

			BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayQuestionView({
				model: currentQuestion
			}));

			//get the lives and show them in the lives region
			var livesCount = PlayModule.gameState;
			BarjeelApp.PlayModule.mainLayout.livesRegion.show(new Barjeel.Views.PlayLivesView({
				model: livesCount
			}));
			BarjeelApp.PlayModule.mainLayout.livesRegion.$el.show();
		}

		//if there's no more questions
    else {
        console.log('No more questions');
        var livesCount =  BarjeelApp.PlayModule.gameState;	
        //show the main layout
				BarjeelApp.allRegion.showAnimated(BarjeelApp.PlayModule.mainLayout, {
					animationType: 'slideLeft'
				});
        						
				BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayWinGameOverView({
					model: livesCount
				}));
				BarjeelApp.PlayModule.mainLayout.livesRegion.$el.hide();
    }

	}

});