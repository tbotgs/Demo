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
var StandableObject = (function (_super) {
    __extends(StandableObject, _super);
    function StandableObject(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddedToStage, _this);
        return _this;
    }
    StandableObject.prototype.onAddedToStage = function (event) {
        var sprite = new egret.Shape();
        sprite.graphics.beginFill(0xffffff, 1);
        sprite.graphics.drawRect(this.x, this.y, this.width, this.height);
        sprite.graphics.endFill();
        this.addChild(sprite);
    };
    return StandableObject;
}(GameObject));
__reflect(StandableObject.prototype, "StandableObject");
//# sourceMappingURL=StandableObject.js.map