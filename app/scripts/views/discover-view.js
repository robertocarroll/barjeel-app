/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverView = Backbone.View.extend({

    		events: {

   			 },

        template: JST['app/scripts/templates/discover-view.hbs'],

        className: 'discover',

        render: function() {

					this.$el.html(this.template());
					return this;
        }

    });

})();
