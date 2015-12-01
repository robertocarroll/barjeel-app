/**
 * Created by marcinkrysiak on 25/02/15.
 */

_.extend(Marionette.Region.prototype, {

    animationType: 'default',

    attachHtml: function (view) {

        var self = this,
            oldView = this.currentView,
            newView = view;

        if ( !oldView || !oldView.$el ) this.animationType = 'default';

        switch(this.animationType) {

            case 'slideLeft':
                console.log('region.showAnimated(): slideLeft');
                TweenMax.to(oldView.$el.children(), 0.01, {xPercent:-100, ease:Power2.easeIn, clearProps:"all", onComplete:function() {

                    //empty old view
                    self.el.innerHTML = ''; //from the original attachHtml method

                    //reset the old view position
                    TweenMax.set(oldView.$el.children(), {xPercent:0});

                    //prepare the new view
                    TweenMax.set(newView.$el.children(), {xPercent:-100});

                    //show the new view
                    self.el.appendChild(newView.el); //from the original attachHtml method

                    //animate in the new view
                    TweenMax.to(newView.$el.children(), 0.5, {xPercent:0, ease:Power2.easeInOut, clearProps:"all"});
                }});
                break;

            case 'slideRight':
                console.log('region.showAnimated(): slideRight');
                TweenMax.to(oldView.$el.children(), 0.01, {xPercent:100, ease:Power2.easeIn, clearProps:"all", onComplete:function() {

                    //empty old view
                    self.el.innerHTML = ''; //from the original attachHtml method

                    //reset the old view position
                    TweenMax.set(oldView.$el.children(), {xPercent:0});

                    //prepare the new view
                    TweenMax.set(newView.$el.children(), {xPercent:100});

                    //show the new view
                    self.el.appendChild(newView.el); //from the original attachHtml method

                    //animate in the new view
                    TweenMax.to(newView.$el.children(), 0.5, {xPercent:0, ease:Power2.easeInOut, clearProps:"all",});
                }});
                break;

            default:
                //console.log('region.show(): default');
                this.el.innerHTML = '';
                this.el.appendChild(view.el);
        }

        this.animationType = 'default';
    },

    showAnimated: function(view, options) {

        options = options || {};
        this.animationType = options.animationType || 'default';
        //options.preventDestroy = true;

        var oldView = this.currentView;

        this.show( view, _.extend(options, { preventDestroy: true }) );

        //destroy oldView if not preventDestroy = true
        if ( !options.preventDestroy ) {
            oldView.destroy();
        }

    }
});
