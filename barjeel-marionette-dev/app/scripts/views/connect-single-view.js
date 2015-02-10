/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectSingleView = Marionette.ItemView.extend({

    		tagName : 'div',
        className: 'blog-post',
        template: JST['app/scripts/templates/connect-single-view.hbs'],

        events: {
				  'touchend #connectBack': 'backConnectPost'
				},

				onDomRefresh: function(){ 
					console.log ("dom refreshed");
					var elem = document.getElementById('mySwipe');

					window.mySwipe = Swipe(elem, {
					  // startSlide: 4,
					  // auto: 3000,
					   continuous: false,
					  // disableScroll: true,
					  // stopPropagation: true,
					   callback: function(index, element) {
					   	var pos = mySwipe.getPos() + 1;
					   	var totalSlides = mySwipe.getNumSlides();
					   	console.log ('current ' + pos + ' / total ' + totalSlides);
					   },
					  // transitionEnd: function(index, element) {}
					});
				},

				backConnectPost: function(){
				var connectCollection = new Barjeel.Collections.ConnectCollection();
				var newConnectView = new Barjeel.Views.ConnectView({				        	
				        	collection: connectCollection,
				        	childView: Barjeel.Views.ConnectListSingleView
				        });       
				BarjeelApp.allRegion.show(newConnectView);
				},

				onDestroy: function(){
			    
			  }

    });

})();
