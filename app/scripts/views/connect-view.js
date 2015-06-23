/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectView = Backbone.Marionette.CompositeView.extend({

    		initialize : function () {
    				console.log ('initialise - fetching collection from ConnectView');
            this.listenTo(this.collection, "reset", this.render);
            this.collection.fetch();
        },

    		template: JST['app/scripts/templates/connect-view.hbs'], 	
    		childView: Barjeel.Views.ConnectListSingleView,
    		childViewContainer: "#list",
    		tagName : 'div',
        className: 'wrapper',

        events: {
				  'touchend #connectBack': 'backHome'
				},

        backHome: function(){
        	console.log ("Back Home tap fired");
					var homeView = new Barjeel.Views.HomeView(); 
					BarjeelApp.allRegion.showAnimated(homeView, { animationType: 'slideRight' });
				}
					 	
    });

})();
