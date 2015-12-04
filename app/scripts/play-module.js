BarjeelApp.module("PlayModule", function(PlayModule, BarjeelApp, Backbone, Marionette, $, _) {

PlayModule.startPlay = function() {
  // Feature detect + local reference
  function lsTest(){
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }

  if(lsTest() === true){
    var gameState = JSON.parse(localStorage.getItem('barjeel-app-game-state'));
    if (gameState == null || gameState.gameInProgress === false) {
      PlayModule.startQuiz();
    }
    else {
      PlayModule.resumeQuiz();
    }
  }

  else{
    console.log("no local storage");
     // BarjeelApp.PlayModule.playQuizNoLocal();
  }
}

PlayModule.startQuiz = function() {
  console.log("play quiz started");
  var newCollection = new Barjeel.Collections.PlayCollection();
  newCollection.fetch({
    success: function(response, options) {
      console.log("fetch questions success");
      //add data to local storage
      localStorage.setItem('barjeel-app-questions', JSON.stringify(newCollection.toJSON()));
      PlayModule.mainLayout = new Barjeel.Views.PlayMainView();
      var gameState = new Barjeel.Models.PlayGameStateModel();
      //set game in progress to true and add it to localstorage
      gameState.set({
        gameInProgress: true
      });
      localStorage.setItem('barjeel-app-game-state', JSON.stringify(gameState.toJSON()));
      PlayModule.getQuestion();
    }
  });
}

PlayModule.resumeQuiz = function() {
  console.log("Restarting quiz");
  PlayModule.mainLayout = new Barjeel.Views.PlayMainView();
  PlayModule.gameState = new Barjeel.Models.PlayGameStateModel();

  //get questions from localstorage
  var newLocalCollection = new Barjeel.Collections.PlayCollection(JSON.parse(localStorage.getItem('barjeel-app-questions')));

  var questions = newLocalCollection
    .chain()
    .filter(function(m) {
      return m.get('use')
    })
    .pluck('id')
    .value();

    if (questions.length > 0) {
     PlayModule.getQuestion();
    }

    //if there's no more questions
  else {
      console.log('No more questions');
  }
}

PlayModule.getQuestion = function() {

// Get all the questions from the collection and filter by use value
  var newLocalCollection = new Barjeel.Collections.PlayCollection(JSON.parse(localStorage.getItem('barjeel-app-questions')));

  var questions = newLocalCollection
  .chain()
  .filter(function(m) {
    return m.get('use')
  })
  .pluck('id')
  .value();

  if (questions.length > 0) {
    console.log('this is how many questions: ' + questions);

    // get random ID from question ID array
    var rand = questions[_.random(questions.length - 1)];
    console.log('chosen ID value: ' + rand);

    //get a model from a collection, specified by ID
    var currentQuestion = newLocalCollection.get(rand);
    console.log(currentQuestion);

    //set the status of that question to used
    currentQuestion.set("use", false);
    localStorage.setItem('barjeel-app-questions', JSON.stringify(newLocalCollection.toJSON()));

    //increase the question count by one
    var counterTemp = PlayModule.gameState.get("questionCounter");
    counterTemp += 1;
    PlayModule.gameState.set(("questionCounter"), counterTemp);

    //show the main layout
    BarjeelApp.allRegion.showAnimated(BarjeelApp.PlayModule.mainLayout, {
      animationType: 'slideRight'
    });

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

  //if there's no more questions
  else {
    console.log('No more questions');
    var livesCount =  PlayModule.gameState;
    //show the main layout
    BarjeelApp.allRegion.showAnimated(BarjeelApp.PlayModule.mainLayout, {
      animationType: 'slideRight'
    });

    BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayWinGameOverView({
      model: livesCount
    }));
    BarjeelApp.PlayModule.mainLayout.livesRegion.$el.hide();
  }
}

});

