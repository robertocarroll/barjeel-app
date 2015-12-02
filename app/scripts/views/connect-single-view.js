
/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectSingleView = Marionette.ItemView.extend({

    		tagName : 'div',
        className: 'blog-post',
        template: JST['app/scripts/templates/connect-single-view.hbs'],

        events: {
				  'tap #connectBack': 'backConnectPost'
				},

				onDomRefresh: function(){
					console.log ("dom refreshed");
					var elem = document.getElementById('mySwipe');

					window.mySwipe = Swipe(elem, {
					   continuous: false,
					   callback: function(index, element) {
					   //	var pos = mySwipe.getPos() + 1;
					   //	var totalSlides = mySwipe.getNumSlides();
					   //	console.log ('current ' + pos + ' / total ' + totalSlides);
					   },

					   transitionEnd: function(index, elem) {
			      	$('.content').animate({ scrollTop: 0 }, 100);
			      }
					});
				},

				backConnectPost: function(){
				var connectCollection = new Barjeel.Collections.ConnectCollection();
				var newConnectView = new Barjeel.Views.ConnectView({
				        	collection: connectCollection,
				        	childView: Barjeel.Views.ConnectListSingleView
				        });
				BarjeelApp.allRegion.showAnimated(newConnectView, { animationType: 'slideLeft' });
				}

    });

})();
