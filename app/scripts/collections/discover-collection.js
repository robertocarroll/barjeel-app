/*global Barjeel, Backbone*/

Barjeel.Collections = Barjeel.Collections || {};

(function () {
    'use strict';

    Barjeel.Collections.DiscoverCollection = Backbone.Collection.extend({
        model: Barjeel.Models.DiscoverModel,
        url: "data/discover.json"   
    });

})();
