/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalTwo = Backbone.Modal.extend({
        template: JST['app/scripts/templates/play-modal-two.hbs'],
        submitEl: '.modal-icon'
    });


})();
