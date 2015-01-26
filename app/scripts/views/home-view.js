/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.HomeView =  Backbone.ClickDebounce(Backbone.View.extend({

    		destructionPolicy: 'never',

    		events: {
        	'touchend #play': 'playGo',
        	'click #connect': 'connectGo',
        	'click #discover': 'discoverGo'
   			 },

    		template: JST['app/scripts/templates/home-view.hbs'],

        className: 'home',

        render: function() {
          console.debug('home-view.js - Starting animation');
					// fill this view's element with html from the template
					this.$el.html(this.template());
					return this;
        },

        playGo: function(event) {
        // Pushing second view to the stack
        	stackNavigator.pushView(Barjeel.Views.PlayView);
        	console.debug(stackNavigator.viewsStack.length);
    		},

    		connectGo: function(event) {
        // Pushing second view to the stack
        	stackNavigator.pushView(Barjeel.Views.ConnectView);
    		},

    		discoverGo: function(event) {
        // Pushing second view to the stack
        	stackNavigator.pushView(Barjeel.Views.DiscoverView);
    		}

    }));

})();
