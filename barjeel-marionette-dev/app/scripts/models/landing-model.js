/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.LandingModel = Backbone.Model.extend({

        defaults: {
        	title: 'test',
        	description: '',
        }
    });

})();
