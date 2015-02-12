/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayMainView = Backbone.Marionette.LayoutView.extend({

        template: JST['app/scripts/templates/play—main-view.hbs'],

        regions: {
		      questionRegion: '#question',
		      wrongRegion: '#wrong',
		      livesRegion: '#lives'
			  },

			  events: {
				  'touchend #playBack': 'backHome'
				},

        backHome: function(){
        	console.log ("Back Home tap fired");
					var homeView = new Barjeel.Views.HomeView(); 
					BarjeelApp.allRegion.show(homeView);
				}

    });

})();
