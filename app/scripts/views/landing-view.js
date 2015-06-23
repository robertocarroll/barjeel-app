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
									BarjeelApp.allRegion.showAnimated(newConnectView, { animationType: 'slideLeft' });	
				        },

				        swipeRight:function(event, direction, distance, duration, fingerCount) {
				       	 	var homeView = new Barjeel.Views.HomeView(); 
									BarjeelApp.allRegion.showAnimated(homeView, { animationType: 'slideRight' });
				        }
            });	

  				this.$(".play").swipe({
                //Generic swipe handler for all directions
                swipeLeft:function(event, direction, distance, duration, fingerCount) {
                	BarjeelApp.PlayModule.startQuiz	();	          
				        },

				        swipeRight:function(event, direction, distance, duration, fingerCount) {
				       	 var homeView = new Barjeel.Views.HomeView(); 
									BarjeelApp.allRegion.showAnimated(homeView, { animationType: 'slideRight' });
				        }
            });
				}

    });

})();
