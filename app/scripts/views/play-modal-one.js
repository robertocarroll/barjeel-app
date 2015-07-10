/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayModalOne = Backbone.Modal.extend({
        template: JST['app/scripts/templates/play-modal-one.hbs'],
        submitEl: '.modal-icon'
    });

})();
