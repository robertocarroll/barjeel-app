/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.LandingView = Marionette.ItemView.extend({

    		events: {
				   "click #connect": "loadConnect"
				},

        template: JST['app/scripts/templates/landing-view.hbs'],

        loadConnect:function(e) {
        
        var connectCollection = new Barjeel.Collections.ConnectCollection();
				var newConnectView = new Barjeel.Views.ConnectView({				        	
				        	collection: connectCollection,
				        	childView: Barjeel.Views.ConnectListSingleView
				        });       
				Barjeels.allRegion.show(newConnectView);

  			}

    });

})();
