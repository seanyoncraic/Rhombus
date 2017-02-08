var Shape = function(){

    // set references to globals
    var stage = Globals.stage;
    var assetManager = Globals.assetManager;

    // private property variables
    var moving = false;

    
    // private game variables
    var sprite = assetManager.getSprite("assets","circle");
    // the behaviour function that will be called in updateMe()
    var behaviour = null;

    // ----------------------------------------------- get/set methods

    // ----------------------------------------------- public methods
    this.setupMe = function(type, myBehaviour, startX, startY, options) {
        sprite.gotoAndStop(type);
        behaviour = myBehaviour;
        // position sprite
        sprite.x = startX;
        sprite.y = startY;
        // add options object to sprite for setting up behaviour function
        if (options != undefined) {
            sprite.behaviour = options;
            sprite.behaviour.ready = false;
        }
    }

    this.startMe = function() {
        stage.addChild(sprite);
        moving = true;
    }

    this.stopMe = function() {
        stage.removeChild(sprite);
        moving = false;

    }

    this.resetMe = function() {
        group = [];
        behaviour = null;


    }

    this.updateMe = function() {
        if (!moving) return;

        // collision detection

        

        // run move behaviour function (result is whether behaviour should still active)
        var result = behaviour(sprite);
        if (!result) {
            console.log("off stage!")
            this.stopMe();
        }


    };

};