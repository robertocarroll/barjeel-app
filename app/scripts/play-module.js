BarjeelApp.module("PlayModule", function(PlayModule, BarjeelApp, Backbone, Marionette, $, _) {

PlayModule.startPlay = function() {
  console.log("play quiz started");
  PlayModule.newCollection = new Barjeel.Collections.PlayCollection();
  PlayModule.newCollection.fetch({
    success: function(response, options) {
      console.log("fetch questions success");
      PlayModule.mainLayout = new Barjeel.Views.PlayMainView();
      PlayModule.gameState = new Barjeel.Models.PlayGameStateModel();
      PlayModule.getQuestion();
    }
  });
}

PlayModule.getQuestion = function() {

  var tempQuestions = PlayModule.newCollection;
  var questions = tempQuestions.chain()
  .pluck('id')
  .value();

  // get random ID from question ID array
  var rand = questions[_.random(questions.length - 1)];
  console.log('chosen ID value: ' + rand);

  //get a model from a collection, specified by ID
  var currentQuestion = tempQuestions.get(rand);
  console.log(currentQuestion);

  //increase the question count by one
  var counterTemp = PlayModule.gameState.get("questionCounter");
  counterTemp += 1;
  PlayModule.gameState.set(("questionCounter"), counterTemp);

  //show the main layout
  BarjeelApp.allRegion.show(PlayModule.mainLayout);

  //show the current question in the question region
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
});
