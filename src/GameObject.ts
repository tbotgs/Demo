class GameObject extends egret.DisplayObjectContainer {

    world: World;

    public set World(world: World) {
        this.world = world;
    }

    public constructor() {
        super();
    }
}