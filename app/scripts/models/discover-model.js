/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.DiscoverModel = Backbone.Model.extend({
    	defaults: {
        	title: '',
        	curator: '',
        	video: ''
        }

    });

})();
