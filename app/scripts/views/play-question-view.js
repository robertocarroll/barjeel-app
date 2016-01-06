/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function() {
  'use strict';

  Barjeel.Views.PlayQuestionView = Backbone.Marionette.ItemView.extend({

    template: JST['app/scripts/templates/play-question-view.hbs'],

    initialize: function () {
        _.bindAll(this, 'checkAnswer');
        console.log ("initialising");
    },

    onDomRefresh: function() {
      $('.content').animate({
        scrollTop: 0
      }, 100);
      console.log('scrolled content');
    },

    events: {
      'touchstart .questionWrapper': 'getStart',
      'touchmove .questionWrapper': 'getEnd'
    },

    getStart: function(e){
        var target = e.target,
        touchStart = e.originalEvent.touches[0];

        this.startY = touchStart.pageY;
        console.log ("start" + this.startY);
        this.$el.on('touchend', '.questionWrapper', this.checkAnswer);
    },

    getEnd: function(e){
        var touchEnd = e.originalEvent.touches[0];
        this.endY = touchEnd.pageY;
        if (Math.abs(this.endY - this.startY) > 10) {
          this.$el.off('touchend', this.checkAnswer);
          console.log ("SCROLLED!");
        }
    },

    getSelected: function() {
      return this.model.get("selected");
    },

    select: function(value) {
      this.model.set("selected", value);
    },

    checkAnswer: function(e) {
      //remove listener for checkAnswer
      this.$el.off('touchend', this.checkAnswer);
      console.log("CHECKING ANSWER");
      $('.questionWrapper').not(active).removeClass('active');
      var active = $(e.currentTarget);
      active.addClass('active');
      var answer = active.data('answer');
      this.select(parseInt(answer, 10));
      var currentSelection = this.model.get("selected"),
      correctAnswer = this.model.get("correctAnswer");

      console.log(currentSelection);
      console.log(correctAnswer);

      if (currentSelection === correctAnswer) {
        var counterTemp = BarjeelApp.PlayModule.gameState.get("correctCounter");
        counterTemp += 1;
        BarjeelApp.PlayModule.gameState.set(("correctCounter"), counterTemp);
        this.model.set("correct", true);
        var currentQuestion = this.model;
        BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayRightView({
          model: currentQuestion
        }));
      }

      else if (currentSelection !== correctAnswer) {
        var livesTemp = BarjeelApp.PlayModule.gameState.get("gamelives");
        livesTemp -= 1;
        BarjeelApp.PlayModule.gameState.set(("gamelives"), livesTemp);
        this.model.set("correct", false);
        this.checkLives();
      }
    },

    checkLives: function() {
      var livesTemp = BarjeelApp.PlayModule.gameState.get("gamelives");

      if (livesTemp > 0) {
        BarjeelApp.PlayModule.mainLayout.questionRegion.$el.hide();
        BarjeelApp.PlayModule.mainLayout.wrongRegion.show(new Barjeel.Views.PlayWrongView());
        BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.show();
      }

      else {
        var livesCount = BarjeelApp.PlayModule.gameState;
        BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayGameOverView({
          model: livesCount
        }));

        BarjeelApp.PlayModule.mainLayout.livesRegion.$el.hide();
      }
    }

  });

})();
