/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverSingleView = Marionette.ItemView.extend({
    		tagName : 'div',
        className: 'blog-post',
        template: JST['app/scripts/templates/discover-single-view.hbs'],

        events: {
				  'touchend #discoverBack': 'backDiscoverPost'
				},

				backDiscoverPost: function(){
				var discoverCollection = new Barjeel.Collections.DiscoverCollection();
      	var newDiscoverView = new Barjeel.Views.DiscoverView({				        	
				        	collection: discoverCollection,
				        	childView: Barjeel.Views.DiscoverListSingleView
				        });       
				BarjeelApp.allRegion.showAnimated(newDiscoverView, { animationType: 'slideRight' });
				}


    });

})();
