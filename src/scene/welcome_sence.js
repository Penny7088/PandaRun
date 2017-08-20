/*
    penny
 */

var WelComeSence = cc.Scene.extend({

    _className:"WelComeSence",
    ctor:function () {
        this._super();
        this.init();
        var menuLayer = new GameMenuLayer();
        this.addChild(menuLayer,1);
    }
});