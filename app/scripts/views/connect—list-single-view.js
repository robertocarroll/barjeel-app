/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectListSingleView = Marionette.ItemView.extend({

    		initialize : function () {
            console.log('connect - itemviewrender');
        },

        template: JST['app/scripts/templates/connect—list-single-view.hbs'],
        tagName : 'div',
        className: 'connect-list',

        events: {
				  'touchend a': 'loadConnectPost'
				},
				 
				loadConnectPost: function(){
					var connectModel = this.model;
					var connectSingleView = new Barjeel.Views.ConnectSingleView({model: connectModel});
				  BarjeelApp.allRegion.show(connectSingleView);
				}
				
    });

})();
