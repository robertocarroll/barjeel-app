/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectListSingleView = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/connect-list-single-view.hbs'],
        tagName : 'div',
        className: 'connect-list',

        events: {
          'touchend .list-item-wrapper': 'loadConnectPost'
				},

				loadConnectPost: function(){
					var connectModel = this.model;
					var connectSingleView = new Barjeel.Views.ConnectSingleView({model: connectModel});
				  BarjeelApp.allRegion.show(connectSingleView);
				}

    });

})();
