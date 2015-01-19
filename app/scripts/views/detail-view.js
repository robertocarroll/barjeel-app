/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DetailView = Barjeel.Views.AnimViewView.extend({

        className: 'detail',

        initialize: function (options) {
          this.animateIn = 'iosSlideInRight';
					this.animateOut = 'slideOutRight';
					// cache the template instead of grabbing it each time on render
					// in case we decide to persist this view instead of removing it
					this.template = _.template($('script[name=detail]').html()); 
        },

         onRender: function() {
					console.debug('DetailView#onRender method triggered');
					// fill this view's element with html from the template
					this.$el.html(this.template());
					} 

    });

})();
