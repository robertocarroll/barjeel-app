/*global Barjeel, Backbone*/

Barjeel.Routers = Barjeel.Routers || {};

(function () {
    'use strict';

    Barjeel.Routers.Barjeel = Backbone.Router.extend({
    	 routes: {
    	'': 'home',
			'play': 'play',
			'connect': 'connect',
			'discover': 'discover'			
			},
			 
			home: function () {
			// make the Home view persist in memory and on the DOM
			if (!this.homeView) {
				this.homeView = new Barjeel.Views.HomeView();
			}
			 
			// pass the view to the Layout View for handling animations etc..
			Barjeel.getInstance().goto(this.homeView);
			},
			 
			play: function () {
				var view = new Barjeel.Views.PlayView();
				Barjeel.getInstance().goto(view);
			},

			connect: function () {
				var view = new Barjeel.Views.ConnectView();
				Barjeel.getInstance().goto(view);
			},

			discover: function () {
				var view = new Barjeel.Views.DiscoverView();
				Barjeel.getInstance().goto(view);
			}    

    });

})();
