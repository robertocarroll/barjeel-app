/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectView = Barjeel.Views.AnimViewView.extend({

        template: JST['app/scripts/templates/connect-view.hbs'],

        className: 'connect',

        initialize: function (options) {
          this.animateIn = 'iosSlideInRight';
					this.animateOut = 'slideOutRight';
        },

        onRender: function () {
          console.debug('ConnectView#onRender method triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
        }

    });

})();
