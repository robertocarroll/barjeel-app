/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.ConnectModel = Backbone.Model.extend({	

        defaults: {
        	title: '',
        	description: '',
        	curator: '',
        	about: ''
        }
        
    });

})();
