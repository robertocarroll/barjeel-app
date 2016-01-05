
/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectSingleView = Marionette.ItemView.extend({

    		tagName : 'div',
        className: 'blog-post',
        template: JST['app/scripts/templates/connect-single-view.hbs'],

        events: {
				  'touchend #connectBack': 'backConnectPost',
          'touchend #connectLeft': 'backConnectSlider',
          'touchend #connectRight': 'forwardConnectSlider'
				},

				onDomRefresh: function(){
					console.log ("dom refreshed");
					var elem = document.getElementById('mySwipe');

					window.mySwipe = Swipe(elem, {
					   continuous: false,
					   callback: function(index, element) {
  					   var pos = mySwipe.getPos() + 1;
  					   var totalSlides = mySwipe.getNumSlides();

               if (pos == 1) {
                console.log ("beginning of slideshow");
                $('#connectLeft').addClass('hidden');
               }

               else if (pos > 1) {
                $('#connectLeft').removeClass('hidden');
               }

               if (pos == totalSlides) {
                $('#connectRight').addClass('hidden');
                console.log ("end of slideshow");
               }

               else if (pos < totalSlides) {
                $('#connectRight').removeClass('hidden');
               }
					   },

					   transitionEnd: function(index, elem) {
			      	$('.content').animate({ scrollTop: 0 }, 100);
			      }
					});
				},

        backConnectSlider: function(){
          window.mySwipe.prev();
        },

        forwardConnectSlider: function(){
          window.mySwipe.next();
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
