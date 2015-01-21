/*global Barjeel, $*/

window.Barjeel = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
      stackNavigator = new BackStack.StackNavigator({
			    el: 'body'
			});

			stackNavigator.pushView(Barjeel.Views.HomeView);
			// start backbone hash change listener
			// Backbone.history.start(); 

			console.debug(stackNavigator.viewsStack.length);
    }
};
  
$(document).ready(function () {
    'use strict';
    Barjeel.init();
});
