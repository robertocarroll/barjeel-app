/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayView = Backbone.View.extend({

    		events: {
        	'click #playBack': 'playBack'
   			 },

        template: JST['app/scripts/templates/play-view.hbs'],

        className: 'play',

        render: function() {
          console.debug('play-view - render triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
					return this;
        },

        playBack: function(event) {
        	console.debug('play back clicked');
        	var slide = new BackStack.SlideEffect();
        // Pushing second view to the stack
        	stackNavigator.popView(slide);
        	console.debug(stackNavigator.viewsStack.length);
    		}

    });

})();
