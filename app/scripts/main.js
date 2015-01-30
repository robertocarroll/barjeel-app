/*global Barjeel, $*/

window.Barjeel = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
    	Barjeels = new Backbone.Marionette.Application();

    	// Define a region for the display view
    	Barjeels.addRegions({
			  allRegion: "body"
			});

			Barjeels.on('start', function () {
				Backbone.history.start();
				// Create a new view and show it
				var homeView = new Barjeel.Views.HomeView(); 
				Barjeels.allRegion.show(homeView);
				
			});
			
			Barjeels.start();

    }
};
  
$(document).ready(function () {
    'use strict';
    Barjeel.init();
});
