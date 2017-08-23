/*
    penny
 */

var GameMenuLayer = cc.Layer.extend({
    /**
     * Initialize the application menu layer.
     */
    openStore: false,
    // onPlay: function () {
    //     cc.AudioEngine.playEffect(res.sound.button);
    //     this.addChild(new GameModePlay(), 100);
    // },
    // onStore: function () {
    //     this.openStore = true;
    //     cc.AudioEngine.stopMusic();
    //
    //     this.addChild(new RankLayer(), 100);
    // },
    // onSet: function () {
    //     var winSize = cc.director.getWinSize();
    //     this.draw = new cc.DrawNode();
    //     this.draw.drawRect(cc.p(0, winSize.height), cc.p(winSize.width, 0), cc.color(0, 0, 0, 80), 0, cc.color(0, 0, 0, 80));
    //     this.addChild(this.draw, 4, 1);
    //
    //     cc.eventManager.addListener({
    //         event: cc.EventListener.TOUCH_ONE_BY_ONE,
    //         swallowTouches: true,
    //         onTouchBegan: function () {
    //             return true;
    //         }
    //     }, this.draw);
    //
    //     this.board = new cc.Sprite(res.ui.setBoard);
    //     this.board.setPosition(cc.p(winSize.width / 2 + 300, winSize.height / 2));
    //     this.board.setScale(0.8);
    //     this.addChild(this.board, 5);
    //     var moveTo = cc.MoveTo(1, cc.p(winSize.width / 2, winSize.height / 2)).easing(cc.EaseElasticInOut());
    //     this.board.runAction(moveTo);
    //
    // },
    ctor: function () {
        this._super();
        cc.log("GameMenuLayer===========");
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
        // var actionTo = cc.MoveTo.create(1, cc.p(250, winSize.height - 160)).easing(cc.easeElasticOut());
        // var sequence = cc.Sequence.create(
        //     actionTo,
        //     cc.CallFunc.create(function (logo) {
        //         var shaking = cc.MoveTo.create(1, cc.p(250, winSize.height - 250)).easing(cc.easeElasticIn());
        //         var shakingBack = cc.MoveTo.create(1, cc.p(250, winSize.height - 140)).easing(cc.EaseElasticInOut);
        //         var shakingSeq = cc.Sequence.create(shaking, shakingBack);
        //         var sequence = cc.Sequence.create(shaking, shakingBack);
        //         logo.runAction(sequence.repeatForever());
        //     }, this.logo));
        // this.logo.runAction(sequence);

        //exit
        // this.exitBtn = new cc.Menu(new cc.MenuItemSprite(
        //     new cc.Sprite(res.ui.backBtn),
        //     new cc.Sprite(res.ui.backBtn),
        //     function () {
        //         cc.director.end();
        //     }, this));
        //
        // this.exitBtn.setPosition(cc.p(-10, 0));
        // this.exitBtn.setScale(0.8);
        // this.addChild(this.exitBtn);


        //play
        // var playBtn = new cc.Menu(new cc.MenuItemSprite(
        //     new cc.Sprite(res.menu.playBtn),
        //     new cc.Sprite(res.menu.playBtnS),
        //     this.onPlay, this
        // ));
        // var playBtnPosX = 200, playBtnPosY = 150;
        // playBtn.setPosition(cc.p(-200, winSize.height));
        // this.addChild(playBtn);
        // var seq = cc.Sequence.create(
        //     cc.MoveTo.create(2, cc.p(playBtnPosX, playBtnPosY)).easing(cc.EaseElasticInOut(0.8)),
        //     cc.CallFunc.create(function (playBtn) {
        //         var shaking = cc.MoveTo.create(1, cc.p(playBtnPosX, playBtnPosY)).easing(cc.easeIn(2.0));
        //         var shakingBack = cc.MoveTo.create(1, cc.p(playBtnPosX, playBtnPosY - 10)).easing(cc.easeOut(2.0));
        //         var shakingSeq = cc.Sequence.create(shaking, shakingBack);
        //         var shakingSeq = cc.Sequence.create(shaking, shakingBack);
        //         playBtn.runAction(shakingSeq.repeatForever());
        //     }, playBtn));
        // playBtn.runAction(seq);

        //storeBtn
        // var storeBtn = new cc.Menu(new cc.MenuItemSprite(
        //     new cc.Sprite(res.menu.startBtn),
        //     new cc.Sprite(res.menu.startBtnS),
        //     this.onStore, this));
        // storeBtn.setPosition(cc.p(winSize.width + 200, winSize.height - 220));
        // this.addChild(storeBtn);
        // var actionTo = cc.moveTo(2, cc.p(winSize.width - 200, winSize.height - 220)).easing(cc.EaseElasticInOut());
        // var seq = cc.Sequence.create(
        //     actionTo,
        //     cc.CallFunc.create(function (storeBtn) {
        //         var shaking = cc.MoveTo.create(2, cc.p(winsize.width - 205, winsize.height - 220)).easing(cc.easeBackInOut());
        //         var shakingBack = cc.MoveTo.create(2, cc.p(winsize.width - 195, winsize.height - 220)).easing(cc.easeBackInOut());
        //         var shakingSeq = cc.Sequence.create(shaking, shakingBack);
        //         storeBtn.runAction(shakingSeq.repeatForever());
        //     }, storeBtn));
        // storeBtn.runAction(seq);

        //setting
        // new cc.Menu(new cc.MenuItemSprite(
        //     new cc.Sprite(res.menu.setBtn),
        //     new cc.Sprite(res.menu.setBtnS),
        //     this.onSet,
        //     this
        // ));


        //add an player here
        //add frame cache
        // cc.spriteFrameCache.addSpriteFrame(res.panda.plist);
        // this.spriteSheet = cc.SpriteBatchNode(res.panda.png);
        // this.addChild(this.spriteSheet, 0);
        // this.spriteSheet.setPosition(cc.p(-100, 30));
        //
        // var animation = new cc.Animation([1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
        //     return cc.spriteFrameCache.getSpriteFrame("panda_run_0" + i + ".png");
        // }), 0.08);
        // var animate = new cc.Animate(animation);
        // this.runningAction = new cc.RepeatForever(animate);
        //
        //
        // this.runningAction.retain();
        // this.sprite = new cc.Sprite("#panda_run_01.png");
        // this.sprite.setPosition(cc.p(-100, 30));
        // this.sprite.runAction(this.runningAction);

        // var moveTo = cc.MoveTo(10, cc.p(winSize.width + 200, 30));
        // var sequence = cc.sequence(moveTo, cc.CallFunc(function (panda) {
        //     panda.setPositionX(-100);
        // }, this.sprite));

        // this.spriteSheet.runAction(sequence.repeatForever());
        // var particle = cc.ParticleSystem(res.particle.circle);
        // particle.setPosition(800, 100);
        // this.addChild(particle, 100);
        // this.scheduleUpdate();
    }
});