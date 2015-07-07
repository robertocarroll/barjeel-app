/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverListSingleView = Marionette.ItemView.extend({

        onRender: function () {
        	this.$el.find('img').on('load', function() { 
        		$('.circle-container-list-discover').hide().fadeIn(500);
        		console.log("Finding image"); 
        	});
        	return this;   	
        },

        template: JST['app/scripts/templates/discover-list-single-view.hbs'],
        tagName: 'div',
        className: 'discover-list',

        events: {
				  'touchend a': 'loadDiscoverPost'
				},
				 
				loadDiscoverPost: function(){
					console.log('loading single discover');
					var discoverModel = this.model;
					var discoverSingleView = new Barjeel.Views.DiscoverSingleView({model: discoverModel});
				  BarjeelApp.allRegion.show(discoverSingleView);
				}

    });

})();
