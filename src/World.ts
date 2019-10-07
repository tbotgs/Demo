class World {

    private _container: egret.DisplayObjectContainer;

    private _gameObjects: utils.Dictionary<number, GameObject> = new utils.Dictionary<number, GameObject>();

    public get GameObjects(): utils.Dictionary<number, GameObject> {
        return this._gameObjects;
    }

    public get Container(): egret.DisplayObjectContainer {
        return this._container;
    }

    public get Height(): number {
        return this._container.height;
    }

    public constructor() {
        this._container = new egret.DisplayObjectContainer();
        this._container.height = 300;
    }

    public addGameObject(go: GameObject) {
        go.World = this;
        console.log(go.hashCode);
        this._gameObjects.Add(go.hashCode.toString(), go);
        this._container.addChild(go);
    }

    public removeGameObject(go: GameObject) {
        go.World = null;
        this._gameObjects.Remove(go.hashCode.toString());
        this._container.removeChild(go);
    }

    public addBackground(bg: egret.DisplayObject) {
        this._container.addChild(bg);
    }
}