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
			  mainRegion: "body"
			});

			Barjeels.on('start', function () {
				// Create a new view and show it
				var staticView = new Barjeel.Views.StaticView(); 
				Barjeels.mainRegion.show(staticView);
			});
			
			Barjeels.start();

    }
};
  
$(document).ready(function () {
    'use strict';
    Barjeel.init();
});
