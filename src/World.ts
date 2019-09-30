class World {

    container: egret.DisplayObjectContainer;

    public get Height(): number {
        return this.container.height;
    }

    public constructor() {
        this.container = new egret.DisplayObjectContainer();
        this.container.height = 300;
    }

    public addGameObject(go: GameObject) {
        go.world = this;
        this.container.addChild(go);
    }

    public addBackground(bg: egret.DisplayObject) {
        this.container.addChild(bg);
    }
}