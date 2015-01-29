/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    // Add static view for home
			Barjeel.Views.HomeView = Marionette.ItemView.extend({

				events: {
				   "click #connect": "loadConnect"
				},

				className: "content",
  			
  			template: JST['app/scripts/templates/home-view.hbs'],

  			loadConnect:function(e) {

  			var connectModel = new Barjeel.Models.LandingModel({title: 'connect', description: 'long description'});	
  			var newLandingConnectView = new Barjeel.Views.LandingView({model: connectModel});	

  			Barjeels.allRegion.show(newLandingConnectView);

		/*		var connectCollection = new Barjeel.Collections.ConnectCollection();
				var newConnectView = new Barjeel.Views.ConnectView({				        	
				        	collection: connectCollection,
				        	childView: Barjeel.Views.ConnectListSingleView
				        });       
				Barjeels.allRegion.show(newConnectView);*/

  			}

			});

})();
