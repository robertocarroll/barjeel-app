/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function() {
	'use strict';

	Barjeel.Views.LandingView = Marionette.ItemView.extend({
		template: JST['app/scripts/templates/landing-view.hbs'],
		onRender: function() {
			console.log('rendering');
			this.$('.play').swipe({
				//Generic swipe handler for all directions
				swipeLeft: function(event, direction, distance, duration, fingerCount) {
					var gameState = JSON.parse(localStorage.getItem('barjeel-app-game-state'));
					if (gameState == null || gameState.gameInProgress === false) {
						BarjeelApp.PlayModule.startQuiz();
					} else {
						BarjeelApp.PlayModule.resumeQuiz();
					}
				},
				swipeRight: function(event, direction, distance, duration, fingerCount) {
					var homeView = new Barjeel.Views.HomeView();
					BarjeelApp.allRegion.showAnimated(homeView, {
						animationType: 'slideRight'
					});
				}
			});

			this.$(".connect").swipe({
				//Generic swipe handler for all directions
				swipeLeft: function(event, direction, distance, duration, fingerCount) {
					var connectCollection = new Barjeel.Collections.ConnectCollection();
					var newConnectView = new Barjeel.Views.ConnectView({
						collection: connectCollection,
						childView: Barjeel.Views.ConnectListSingleView
					});
					BarjeelApp.allRegion.showAnimated(newConnectView, {
						animationType: 'slideLeft'
					});
				},

				swipeRight: function(event, direction, distance, duration, fingerCount) {
					var homeView = new Barjeel.Views.HomeView();
					BarjeelApp.allRegion.showAnimated(homeView, {
						animationType: 'slideRight'
					});
				}
			});

			this.$(".discover").swipe({
				//Generic swipe handler for all directions
				swipeLeft: function(event, direction, distance, duration, fingerCount) {
					var discoverCollection = new Barjeel.Collections.DiscoverCollection();
					var newDiscoverView = new Barjeel.Views.DiscoverView({
						collection: discoverCollection,
						childView: Barjeel.Views.DiscoverListSingleView
					});
					BarjeelApp.allRegion.showAnimated(newDiscoverView, {
						animationType: 'slideLeft'
					});
				},
				swipeRight: function(event, direction, distance, duration, fingerCount) {
					var homeView = new Barjeel.Views.HomeView();
					BarjeelApp.allRegion.showAnimated(homeView, {
						animationType: 'slideRight'
					});
				}
			});
		}
	});
})();