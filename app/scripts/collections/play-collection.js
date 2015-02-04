/*global Barjeel, Backbone*/

Barjeel.Collections = Barjeel.Collections || {};

(function () {
    'use strict';

    Barjeel.Collections.PlayCollection = Backbone.Collection.extend({

        model: Barjeel.Models.PlayModel,
        url: "scripts/data/questions.json",
        lastIndex: -1,
        getRandom: function() {
            var idx = this.lastIndex;
            while (idx === this.lastIndex) {
                idx = _.random(this.models.length - 1);
            }
            this.lastIndex = idx;
            return this.models[idx];
        }
    });

    return Barjeel.Collections.PlayCollection;

})();
