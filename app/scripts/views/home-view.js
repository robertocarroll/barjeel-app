/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    // Add static view for home
			Barjeel.Views.HomeView = Marionette.ItemView.extend({

				events: {
				   "click .connect": "loadConnect"
				},

				className: "content",
  			
  			template: JST['app/scripts/templates/home-view.hbs'],

  			loadConnect:function(e) {
	  			var connectModel = new Barjeel.Models.LandingModel({title: 'connect', description: 'Test your knowledge and explore a network of connections hidden within Barjeel’s vast art collection'});	
	  			var newLandingConnectView = new Barjeel.Views.LandingView({model: connectModel});	
	  			Barjeels.allRegion.show(newLandingConnectView);
  			}

			});

})();
