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
			  allRegion: "body",
			  header: '#header',
			  main: '#main',
			  footer: '#footer'
			});

			Barjeels.on('start', function () {
				Backbone.history.start();
				// Create a new view and show it
				var staticView = new Barjeel.Views.StaticView(); 
				Barjeels.allRegion.show(staticView);
			});
			
			Barjeels.start();

    }
};
  
$(document).ready(function () {
    'use strict';
    Barjeel.init();
});
