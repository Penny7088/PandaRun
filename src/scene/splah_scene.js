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
        this._super();
        this.init();
        var openingLayer = new GameOpeningLayer();
        openingLayer.bake();
        this.addChild(openingLayer,1,1);
        setTimeout(function () {
            var gameMenuLayer = new GameMenuLayer();
            cc.sys.localStorage.removeItem("username");
            if(cc.sys.localStorage.getItem("username")){
                cc.log("welcome");
                cc.director.runScene(new WelComeSence());
            } else {
                cc.log("infoSence");
                cc.director.runScene(new infoSence());
            }

        }.bind(this),3000);
    }

});