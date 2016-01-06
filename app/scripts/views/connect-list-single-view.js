/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectListSingleView = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/connect-list-single-view.hbs'],
        tagName : 'div',
        className: 'connect-list',

        initialize: function () {
            _.bindAll(this, 'loadConnectPost');
        },

        events: {
          'touchstart .list-item-wrapper': 'getStart',
          'touchmove .list-item-wrapper': 'getEnd'
        },

        getStart: function(e){
          var target = e.target,
          touchStart = e.originalEvent.touches[0];

          this.startY = touchStart.pageY;
          console.log ("start" + this.startY);
          this.$el.on('touchend', '.list-item-wrapper', this.loadConnectPost);
        },

        getEnd: function(e){
            var touchEnd = e.originalEvent.touches[0];
            this.endY = touchEnd.pageY;
            if (Math.abs(this.endY - this.startY) > 10) {
              this.$el.off('touchend', this.loadConnectPost);
              console.log ("SCROLLED!");
            }
        },

				loadConnectPost: function(){
					var connectModel = this.model;
					var connectSingleView = new Barjeel.Views.ConnectSingleView({model: connectModel});
				  BarjeelApp.allRegion.show(connectSingleView);
				}

    });

})();
