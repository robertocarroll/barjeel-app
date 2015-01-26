/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectView = Backbone.View.extend({

    	initialize: function() {	
    			var connectCollection = new Barjeel.Collections.ConnectCollection;
        	connectCollection.fetch({
	        	success: function () {			
	        			console.log('initialise collection - ' + connectCollection.length);
	        		}      
			      });
    	},

    	events: {
        	'click #connectBack': 'connectBack'
   			 },

        template: JST['app/scripts/templates/connect-view.hbs'],

        className: 'connect',

        render: function(){
        	
    		},
		    
        connectBack: function(event) {
        	console.debug('connect back clicked');
        // Pushing second view to the stack
        	stackNavigator.popView();
        	console.debug(stackNavigator.viewsStack.length);
    		}

    });

})();
