/*global Barjeel, $*/

window.Barjeel = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
      // get an instance of the root App view
			this.getInstance();
			// start backbone hash change listener
			Backbone.history.start(); 
    },
    // use a getter method to get the instance instead accessing this.instance
		// directly. Also, this prevents multiple instantiation of the application
		getInstance: function() {
			// creates a new instance of the root Barjeel
			// or returns the instance if it already exists
			if (!this.instance) {
				this.instance = new Barjeel.Views.RootView();
			}
				return this.instance;
			}
};
  
$(document).ready(function () {
    'use strict';
    Barjeel.init();
});
