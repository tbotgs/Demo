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
        return _super.call(this) || this;
    }
    Object.defineProperty(GameObject.prototype, "World", {
        set: function (world) {
            this.world = world;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}(egret.DisplayObjectContainer));
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map