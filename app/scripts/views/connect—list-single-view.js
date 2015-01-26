/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectListSingleView = Backbone.View.extend({

        template: JST['app/scripts/templates/connect—list-single-view.hbs'],

        tagName: 'li',

        className: 'connect',

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
