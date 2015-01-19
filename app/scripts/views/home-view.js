/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.HomeView = Barjeel.Views.AnimViewView.extend({

    		template: JST['app/scripts/templates/home-view.hbs'],

        className: 'home',

        initialize: function (options) {
          this.animateIn = 'null';
					this.animateOut = 'iosFadeLeft';
					// cache the template -- especially if your homeview may contain a collection or
					// act like a CollectionView; This prevents us from having to re-create the view
					// instance and re-fetch the collection if the apps primary purpose is focused around
					// the list view.
					
					return this; 
        },

         onRender: function() {
					console.log('HomeView#onRender method triggered');
					// fill this view's element with html from the template
					// and render it only once (we have no collection so no need to re-render since view persists)
					if (this.$el.is(':empty'))
						this.$el.html(this.template());
						 
						return this;
					} 

    });

})();
