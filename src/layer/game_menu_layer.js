/*
    penny
 */

var GameMenuLayer = cc.Layer.extend({
    /**
     * Initialize the application menu layer.
     */
    openStore: false,
    ctor: function () {
        this._super();
        var winSize = cc.director.getWinSize();
        //bj
        var spritebg = new cc.Sprite(res.menu.bg);
        spritebg.setPosition(cc.p(0, -30));
        spritebg.attr({
            anchorX: 0,
            anchorY: 0,
            width: winSize.width,
            height: winSize.height
        });
        spritebg.setScale(0.8);
        this.addChild(spritebg);
        //action
        var move = cc.MoveTo.create(5, cc.p(0, -10)).easing(cc.easeElasticOut());
        spritebg.runAction(move);
        cc.MenuItemFont.setFontSize(60);

        //welcome title
        this.welcome = new cc.LabelTTF("Welcom," + cc.sys.localStorage.getItem("username"), "Helvetica", 60);
        this.welcome.setColor(cc.color(255, 255, 255));
        this.welcome.setPosition(cc.p(winSize.width - 180, winSize.height - 50));
        this.welcome.setScale(0.3);
        this.addChild(this.welcome);

        //logo
        this.logo = new cc.Sprite(res.menu.logo);
        this.logo.setPosition(cc.p(-200, winSize.height - 50));
        this.logo.setScale(0.8);
        this.addChild(this.logo);
        //action
        var actionTo = cc.MoveTo.create(1, cc.p(250, winSize.height - 160)).easing(cc.easeElasticOut());
        cc.Sequence.create(
            actionTo,
            cc.CallFunc.create(function (logo) {
                var shaking = cc.MoveTo.create(1, cc.p(250, winSize.height - 250)).easing(cc.easeElasticIn());

            })
        );

    }
});