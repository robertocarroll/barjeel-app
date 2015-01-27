/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayView = Backbone.View.extend({

    		events: {
        	
   			 },

        template: JST['app/scripts/templates/play-view.hbs'],

        className: 'play',

        render: function() {
					this.$el.html(this.template());
					return this;
        }

    });

})();
