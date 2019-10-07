var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var World = (function () {
    function World() {
        this._gameObjects = new utils.Dictionary();
        this._container = new egret.DisplayObjectContainer();
        this._container.height = 300;
    }
    Object.defineProperty(World.prototype, "GameObjects", {
        get: function () {
            return this._gameObjects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(World.prototype, "Container", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(World.prototype, "Height", {
        get: function () {
            return this._container.height;
        },
        enumerable: true,
        configurable: true
    });
    World.prototype.addGameObject = function (go) {
        go.World = this;
        console.log(go.hashCode);
        this._gameObjects.Add(go.hashCode.toString(), go);
        this._container.addChild(go);
    };
    World.prototype.removeGameObject = function (go) {
        go.World = null;
        this._gameObjects.Remove(go.hashCode.toString());
        this._container.removeChild(go);
    };
    World.prototype.addBackground = function (bg) {
        this._container.addChild(bg);
    };
    return World;
}());
__reflect(World.prototype, "World");
//# sourceMappingURL=World.js.map