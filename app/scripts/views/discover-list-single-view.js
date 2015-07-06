/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverListSingleView = Marionette.ItemView.extend({

    		initialize : function () {
            console.log('discover - itemviewrender');
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
