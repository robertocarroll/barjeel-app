BarjeelApp.module("DiscoverModule", function(DiscoverModule, BarjeelApp, Backbone, Marionette, $, _){

	DiscoverModule.startDiscover = function() {
		var discoverModel = new BarjeelApp.LandingModel({title: 'discover', description: 'Watch and listen as'});	
		var newLandingDiscoverView = new Barjeel.Views.LandingView({model: discoverModel});	
		BarjeelApp.allRegion.showAnimated(newLandingDiscoverView, { animationType: 'slideLeft' });
	}		

});	