class StandableObject extends GameObject {

    public constructor(x: number, y: number, width: number, height: number) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(event: egret.Event) {
        let sprite = new egret.Shape();
        sprite.graphics.beginFill(0xffffff, 1);
        sprite.graphics.drawRect(this.x, this.y, this.width, this.height);
        sprite.graphics.endFill();

        this.addChild(sprite);
    }
}