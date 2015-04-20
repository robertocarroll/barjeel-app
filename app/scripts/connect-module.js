BarjeelApp.module("ConnectModule", function(ConnectModule, BarjeelApp, Backbone, Marionette, $, _){


	ConnectModule.startConnect = function() {

		var connectModel = new Barjeel.Models.LandingModel({title: 'connect', description: 'Meet art lovers and leading experts as they present some of Barjeel’s greatest hits in curated mini-exhibits'});	
		var newLandingConnectView = new Barjeel.Views.LandingView({model: connectModel});	
		BarjeelApp.allRegion.show(newLandingConnectView);

	}		

});	