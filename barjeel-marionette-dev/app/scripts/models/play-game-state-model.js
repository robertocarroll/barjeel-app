/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.PlayGameStateModel = Backbone.Model.extend({

       defaults: {
				"questionCount": 0,
				"correctCounter": 0,
				"gamelives": 3
			}

    });

})();
