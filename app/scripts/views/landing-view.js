/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.LandingView = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/landing-view.hbs'],

  			onRender: function() {

  				console.log ("rendering");
  				this.$(".connect").swipe({
                //Generic swipe handler for all directions
                swipeLeft:function(event, direction, distance, duration, fingerCount) {
				          var connectCollection = new Barjeel.Collections.ConnectCollection();
									var newConnectView = new Barjeel.Views.ConnectView({				        	
									        	collection: connectCollection,
									        	childView: Barjeel.Views.ConnectListSingleView
									        });       
									Barjeels.allRegion.show(newConnectView);	
				        },

				        swipeRight:function(event, direction, distance, duration, fingerCount) {
				       	 console.log ("return home");
				        }
            });	

  				this.$(".play").swipe({
                //Generic swipe handler for all directions
                swipeLeft:function(event, direction, distance, duration, fingerCount) {
				          var playCollection = new Barjeel.Collections.PlayCollection();
									var newPlayView = new Barjeel.Views.PlayView({				        	
									        	collection: playCollection,
									        	childView: Barjeel.Views.PlaySingleView
									        });       
									Barjeels.allRegion.show(newPlayView);	
				        },

				        swipeRight:function(event, direction, distance, duration, fingerCount) {
				       	 console.log ("return home");
				        }
            });
				}

    });

})();
