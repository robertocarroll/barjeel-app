/*global Barjeel, Backbone*/

Barjeel.Routers = Barjeel.Routers || {};

(function () {
    'use strict';

    Barjeel.Routers.Barjeel = Backbone.Router.extend({
    	 routes: {
			'detail': 'detail',
			'': 'home'
			},
			 
			home: function () {
			// make the Home view persist in memory and on the DOM
			if (!this.homeView) {
			this.homeView = new Barjeel.Views.HomeView();
			}
			 
			// pass the view to the Layout View for handling animations etc..
			Barjeel.getInstance().goto(this.homeView);
			},
			 
			detail: function () {
			var view = new Barjeel.Views.DetailView();
			Barjeel.getInstance().goto(view);
			} 

    });

})();
