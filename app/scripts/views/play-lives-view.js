/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayLivesView = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play-lives-view.hbs'],

        modelEvents: {
        'change': 'lifeLost'
		    },

		    lifeLost: function() {
		        this.render();
		    }

    });

})();
