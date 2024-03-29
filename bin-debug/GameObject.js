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
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        var _this = _super.call(this) || this;
        _this._objectsBelow = new utils.Dictionary();
        return _this;
    }
    Object.defineProperty(GameObject.prototype, "ObjectsBelow", {
        get: function () {
            return this._objectsBelow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "World", {
        get: function () {
            return this._world;
        },
        set: function (world) {
            this._world = world;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}(egret.DisplayObjectContainer));
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map