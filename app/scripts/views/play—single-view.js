/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlaySingleView = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/play—single-view.hbs'],
        tagName : 'div',
        className: 'play-list',

        initialize: function () {
            console.log('play - question itemviewrender');
        }

    });

})();
