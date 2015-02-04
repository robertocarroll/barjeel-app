/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    // Add static view for home
			Barjeel.Views.HomeView = Marionette.ItemView.extend({

				events: {
					"touchend .play": "loadPlay",
				  "touchend .connect": "loadConnect",
				  "touchend .discover": "loadDiscover"
				},

				className: "content",
  			
  			template: JST['app/scripts/templates/home-view.hbs'],

  			loadPlay:function(e) {
	  			var playModel = new Barjeel.Models.LandingModel({title: 'play', description: 'Test your knowledge and explore a network of connections hidden within Barjeel’s vast art collection'});	
	  			var newLandingPlayView = new Barjeel.Views.LandingView({model: playModel});	
	  			Barjeels.allRegion.show(newLandingPlayView);
  			},

  			loadConnect:function(e) {
	  			var connectModel = new Barjeel.Models.LandingModel({title: 'connect', description: 'Meet art lovers and leading experts as they present some of Barjeel’s greatest hits in curated mini-exhibits'});	
	  			var newLandingConnectView = new Barjeel.Views.LandingView({model: connectModel});	
	  			Barjeels.allRegion.show(newLandingConnectView);
  			},

  			loadDiscover:function(e) {
	  			var discoverModel = new Barjeel.Models.LandingModel({title: 'discover', description: 'Watch and listen as Barjeel’s founder Sultan Sooud Al Qassemi and special guests give a behind the scenes look at works from the Barjeel collection'});	
	  			var newLandingDiscoverView = new Barjeel.Views.LandingView({model: discoverModel});	
	  			Barjeels.allRegion.show(newLandingDiscoverView);
  			}

			});

})();
