/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectSingleView = Marionette.ItemView.extend({

    		tagName : 'div',
        className: 'blogPost',
        template: JST['app/scripts/templates/connect-single-view.hbs'],

        events: {
				  'click #connectBack': 'backConnectPost'
				},

				backConnectPost: function(){
				var connectCollection = new Barjeel.Collections.ConnectCollection();
				var newConnectView = new Barjeel.Views.ConnectView({				        	
				        	collection: connectCollection,
				        	childView: Barjeel.Views.ConnectListSingleView
				        });       
				Barjeels.allRegion.show(newConnectView);
				}

    });

})();
