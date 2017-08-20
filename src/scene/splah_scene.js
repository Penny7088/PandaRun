/**
 * penny
 *
 */

//splash scene
var SplashScene = cc.Scene.extend({

    _className:"SplashScene",

    /**
     * Constructor
     */
    ctor:function () {
        this._super;
        this.init();
        var openingLayer = new GameOpeningLayer();
        openingLayer.bake();
        this.addChild(openingLayer,1,1);
        setTimeout(function () {
            var gameMenuLayer = new GameMenuLayer();
            if(sys.localStorage.getItem("username")){
                cc.director.runScene(new WelComeSence());
            } else {
                cc.director.runScene(new infoSence());
            }

        }.bind(this),3000);
    }

});