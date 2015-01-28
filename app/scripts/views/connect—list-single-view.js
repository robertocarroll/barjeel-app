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
        className: 'blogList',

        events: {
				  'click a': 'logInfoUrl'
				},
				 
				logInfoUrl: function(){
				  console.log(this.model.get('description'));
				}
    });

})();
