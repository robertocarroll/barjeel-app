/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.PlayModel = Backbone.Model.extend({

        defaults: {
					"selected": -1,
					"correct": null
				}

    });

})();
