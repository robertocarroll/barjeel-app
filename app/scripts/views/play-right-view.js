/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function() {
	'use strict';

	Barjeel.Views.PlayRightView = Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("Right view initialised" + JSON.stringify(BarjeelApp.PlayModule.gameState));
		},

		template: JST['app/scripts/templates/play-right-view.hbs'],

		onRender: function() {
			this.$el.find('img').on('load', function() {
				$('.wrap').hide().fadeIn(500);
				console.log("Finding image");
			});
			return this;
		},

		events: {
			"touchend .next": "nextQuestion",
			"touchend .open-modal-one": "openModalOne",
			"touchend .open-modal-two": "openModalTwo"
		},

		onDomRefresh: function() {
			$('.content').animate({
				scrollTop: 0
			}, 100);
			console.log('scrolled content');
		},

		nextQuestion: function(e) {
			//get the next question
			BarjeelApp.PlayModule.getQuestion();
		},

		openModalOne: function(e) {
			console.log('firing open modal 1');
			//get the next question
			BarjeelApp.PlayModule.mainLayout.modals.show(new Barjeel.Views.PlayModalOne({model: this.model}));
		},

		openModalTwo: function(e) {
			console.log('firing open modal 2');
			//get the next question
			BarjeelApp.PlayModule.mainLayout.modals.show(new Barjeel.Views.PlayModalTwo({model: this.model}));
		}

	});

})();