/*global Barjeel, Backbone*/

Barjeel.Collections = Barjeel.Collections || {};

(function () {
    'use strict';

    Barjeel.Collections.PlayCollection = Backbone.Collection.extend({

        model: Barjeel.Models.PlayModel,
        url: "scripts/data/questions.json"
        
    });

})();
