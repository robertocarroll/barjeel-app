/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayView = Barjeel.Views.AnimViewView.extend({

        template: JST['app/scripts/templates/play-view.hbs'],

        className: 'play',

        initialize: function (options) {
          this.animateIn = 'iosSlideInRight';
					this.animateOut = 'slideOutRight';
        },

        onRender: function () {
           console.debug('PlayView#onRender method triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
        }

    });

})();
