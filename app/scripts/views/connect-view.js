/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectView = Backbone.View.extend({

    	events: {
        	'click #connectBack': 'connectBack'
   			 },

        template: JST['app/scripts/templates/connect-view.hbs'],

        className: 'connect',

        render: function() {
          console.debug('connect-view - render triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
					return this;
        },

        connectBack: function(event) {
        	console.debug('connect back clicked');
        	var fade = new BackStack.FadeEffect();
        // Pushing second view to the stack
        	stackNavigator.popView(fade);
    		}

    });

})();
