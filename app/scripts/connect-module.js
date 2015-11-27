BarjeelApp.module("ConnectModule", function(ConnectModule, BarjeelApp, Backbone, Marionette, $, _){

	ConnectModule.startConnect = function() {
		var connectCollection = new Barjeel.Collections.ConnectCollection();
    var newConnectView = new Barjeel.Views.ConnectView({
      collection: connectCollection,
      childView: Barjeel.Views.ConnectListSingleView
    });
    BarjeelApp.allRegion.showAnimated(newConnectView, {
      animationType: 'slideRight'
    });
	}

});
