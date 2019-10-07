class GameObject extends egret.DisplayObjectContainer {

    private _world: World;

    private _objectsBelow: utils.Dictionary<number, GameObject> = new utils.Dictionary<number, GameObject>();

    public get ObjectsBelow(): utils.Dictionary<number, GameObject> {
        return this._objectsBelow;
    }

    public set World(world: World) {
        this._world = world;
    }

    public get World(): World {
        return this._world;
    }

    public constructor() {
        super();
    }
}