/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverView = Barjeel.Views.AnimViewView.extend({

        template: JST['app/scripts/templates/discover-view.hbs'],

        className: 'discover',

        initialize: function () {
          this.animateIn = 'iosSlideInRight';
					this.animateOut = 'slideOutRight';
        },

        onRender: function () {
          console.debug('DiscoverView#onRender method triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
        }

    });

})();
