/*
    penny
 */

var infoSence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new InfoLayer());
    }
});
