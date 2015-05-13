BarjeelApp = new Backbone.Marionette.Application();

BarjeelApp.addRegions({
  allRegion: "body"
});

BarjeelApp.addInitializer(function(options){
	var homeView = new Barjeel.Views.HomeView(); 
	BarjeelApp.allRegion.show(homeView);
	console.log ("app started");	
});

$(document).ready(function(){
  BarjeelApp.start();
});

window.Barjeel = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};
  

