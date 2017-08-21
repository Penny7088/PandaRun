/*
    penny
 */

var GameMenuLayer = cc.Layer.extend({
    /**
     * Initialize the application menu layer.
     */
    openStore: false,
    onPlay: function () {
        cc.AudioEngine.playEffect(res.sound.button);
        this.addChild(new GameModePlay(),100);
    },
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
        var sequence = cc.Sequence.create(
            actionTo,
            cc.CallFunc.create(function (logo) {
                var shaking = cc.MoveTo.create(1, cc.p(250, winSize.height - 250)).easing(cc.easeElasticIn());
                var shakingBack = cc.MoveTo.create(1,cc.p(250,winSize.height-140)).easing(cc.EaseElasticInOut);
                var shakingSeq = cc.Sequence.create(shaking,shakingBack);
                var sequence = cc.Sequence.create(shaking,shakingBack);
                logo.runAction(sequence.repeatForever());
            },this.logo));
        this.logo.runAction(sequence);

        //exit
        this.exitBtn = new cc.Menu(new cc.MenuItemSprite(
            new cc.Sprite(res.ui.backBtn),
            new cc.Sprite(res.ui.backBtn),
            function () {
                cc.director.end();
            },this));

        this.exitBtn.setPosition(cc.p(-10,0));
        this.exitBtn.setScale(0.8);
        this.addChild(this.exitBtn);


        //play
        var playBtn = new cc.Menu(new cc.MenuItemSprite(
            new cc.Sprite(res.menu.playBtn),
            new cc.Sprite(res.menu.playBtnS),
            this.onPlay,this
        ));
        var playBtnPosX = 200, playBtnPosY = 150;
        playBtn.setPosition(cc.p(-200,winSize.height));
        this.addChild(playBtn);
        var seq = cc.Sequence.create(
            cc.MoveTo.create(2,cc.p(playBtnPosX,playBtnPosY)).easing(cc.EaseElasticInOut(0.8)),
            cc.CallFunc.create(function (playBtn) {
                var shaking = cc.MoveTo.create(1, cc.p(playBtnPosX, playBtnPosY)).easing(cc.easeIn(2.0));
                var shakingBack = cc.MoveTo.create(1, cc.p(playBtnPosX, playBtnPosY-10)).easing(cc.easeOut(2.0));
                var shakingSeq = cc.Sequence.create(shaking, shakingBack);
                var shakingSeq = cc.Sequence.create(shaking, shakingBack);
                playBtn.runAction(shakingSeq.repeatForever());
            },playBtn));
        playBtn.runAction(seq);

    }
});