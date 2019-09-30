var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(x, y) {
        var _this = _super.call(this) || this;
        _this._gravity = 9.8;
        _this._jumpForce = 100;
        _this._movementSpeed = 10;
        _this._onGround = false;
        _this._isJumping = false;
        _this.x = x;
        _this.y = y;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Player.prototype.onAddToStage = function (event) {
        var player = new egret.Shape();
        player.graphics.beginFill(0x0000ff, 1);
        player.graphics.drawRect(0, 0, 50, 50);
        player.graphics.endFill();
        this.width = 50;
        this.height = 50;
        this.addChild(player);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpHandler, this);
    };
    Player.prototype.moveHandler = function (event) {
        if (event.touchDown && this._onGround) {
            if (event.stageX < this.x) {
                this.move(-this._movementSpeed, 0);
            }
            else if (event.stageX > this.x) {
                this.move(this._movementSpeed, 0);
            }
        }
    };
    Player.prototype.jumpHandler = function (event) {
        if (!event.touchDown && this.y - this._jumpForce > this.height) {
            this.jump(this._jumpForce, 1000);
        }
    };
    Player.prototype.move = function (dx, dy) {
        if (this.x + dx > this.width / 2 && this.x + dx < this.stage.width - this.width / 2) {
            this.x += dx;
        }
        if (this.y + dx > this.height / 2 && this.y + dy < this.stage.height - this.height / 2) {
            this.y += dy;
        }
    };
    Player.prototype.jump = function (jumpForce, time) {
        if (this._onGround && !this._isJumping) {
            this._onGround = false;
            this._isJumping = true;
            egret.Tween.get(this).to({ y: this.y - jumpForce }, time, egret.Ease.backOut);
        }
    };
    Player.prototype.applyGravity = function () {
        if (this.y < this.world.Height - this.world.Height - this._gravity) {
            this.y += this._gravity;
        }
        else {
            this._onGround = true;
            this._isJumping = false;
            if (this.y + this.height > this.world.Height - this._gravity) {
                this.y = this.world.Height - this.height;
            }
        }
    };
    return Player;
}(GameObject));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map