/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayView = Backbone.View.extend({

    		events: {
        	'click #playBack': 'playBack',
        	'click #playConnectNav': 'playConnectNav',
        	'click #playDiscoverNav': 'playDiscoverNav'
   			 },

        template: JST['app/scripts/templates/play-view.hbs'],

        className: 'play',

        render: function() {
					this.$el.html(this.template());
					return this;
        },

        playBack: function(event) {
        	stackNavigator.popView();
        	console.debug(stackNavigator.viewsStack.length);
    		},

    		playConnectNav: function(event) {
    			var NoEffect = new BackStack.NoEffect();
        	stackNavigator.replaceView(Barjeel.Views.ConnectView, null, NoEffect);
        	console.debug(stackNavigator.viewsStack.length);
    		},

    		playDiscoverNav: function(event) {
    			var NoEffect = new BackStack.NoEffect();
        	stackNavigator.replaceView(Barjeel.Views.DiscoverView, null, NoEffect);
        	console.debug(stackNavigator.viewsStack.length);
    		}

    });

})();
