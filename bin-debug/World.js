var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var World = (function () {
    function World() {
        this.container = new egret.DisplayObjectContainer();
        this.container.height = 300;
    }
    Object.defineProperty(World.prototype, "Height", {
        get: function () {
            return this.container.height;
        },
        enumerable: true,
        configurable: true
    });
    World.prototype.addGameObject = function (go) {
        go.world = this;
        this.container.addChild(go);
    };
    World.prototype.addBackground = function (bg) {
        this.container.addChild(bg);
    };
    return World;
}());
__reflect(World.prototype, "World");
//# sourceMappingURL=World.js.map