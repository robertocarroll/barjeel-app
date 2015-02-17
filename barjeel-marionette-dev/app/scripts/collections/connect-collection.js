/*global Barjeel, Backbone*/

Barjeel.Collections = Barjeel.Collections || {};

(function () {
    'use strict';

    Barjeel.Collections.ConnectCollection = Backbone.Collection.extend({
        model: Barjeel.Models.ConnectModel,
        url: "data/connect.json"        
    });

})();
