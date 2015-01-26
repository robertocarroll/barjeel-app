/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverView = Backbone.View.extend({

    		events: {
        	'click #discoverBack': 'discoverBack'
   			 },

        template: JST['app/scripts/templates/discover-view.hbs'],

        className: 'discover',

        render: function() {
          console.debug('discover-view - render triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
					return this;
        },

        discoverBack: function(event) {
        	console.debug('discover back clicked');    	
        // Pushing second view to the stack
        	stackNavigator.popView();
        	console.debug(stackNavigator.viewsStack.length);
    		}

    });

})();
