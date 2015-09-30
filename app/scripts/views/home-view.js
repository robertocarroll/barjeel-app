Barjeel.Views = Barjeel.Views || {};

(function() {
	'use strict';
	// Add static view for home
	Barjeel.Views.HomeView = Marionette.ItemView.extend({
		events: {
			"touchend .play": "loadPlay",
			"touchend .connect": "loadConnect"
		},
		className: "content",
		template: JST['app/scripts/templates/home-view.hbs'],
		loadPlay: function(e) {
			BarjeelApp.PlayModule.startPlay();
		},
		loadConnect: function(e) {
			BarjeelApp.ConnectModule.startConnect();
		}
	});
})();