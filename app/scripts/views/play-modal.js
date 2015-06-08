/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalView = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play-modal.hbs'],

        tagName: 'div',

        id: '',

        className: ''

    });

})();
