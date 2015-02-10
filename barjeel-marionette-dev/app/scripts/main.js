BarjeelApp = new Backbone.Marionette.Application();

BarjeelApp.addRegions({
  allRegion: "body"
});


BarjeelApp.addInitializer(function(options){

		var homeView = new Barjeel.Views.HomeView(); 
		BarjeelApp.allRegion.show(homeView);
	
});

$(document).ready(function(){
	console.log ("app started");
  BarjeelApp.start();
});


window.Barjeel = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};
  

