/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectView = Backbone.Marionette.CompositeView.extend({
    		template: JST['app/scripts/templates/connect-view.hbs'], 	
    		childView: Barjeel.Views.ConnectListSingleView,
    		childViewContainer: "#list",
    		tagName : 'div',
        className: 'wrapper',
					 	
    });

})();
