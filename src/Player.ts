class Player extends GameObject {

    private _gravity: number = 9.8;
    private _jumpForce: number = 100;
    private _movementSpeed: number = 10;

    private _onGround: boolean = false;
    private _isJumping: boolean = false;

    public constructor(x?: number, y?: number) {
        super();
        this.x = x;
        this.y = y;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        var player: egret.Shape = new egret.Shape();
        player.graphics.beginFill(0x0000ff, 1);
        player.graphics.drawRect(0, 0, 50, 50);
        player.graphics.endFill();
        this.width = 50;
        this.height = 50;
        this.addChild(player);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jumpHandler, this);
    }

    private moveHandler(event: egret.TouchEvent) {
        // if (event.touchDown && this._onGround) {
        //     if (event.stageX < this.x) {
        //         this.move(-this._movementSpeed, 0);
        //     }
        //     else if (event.stageX > this.x) {
        //         this.move(this._movementSpeed, 0);
        //     }
        // }
    }

    private jumpHandler(event: egret.TouchEvent) {
        if (!event.touchDown && this.y - this._jumpForce > this.height) {
            this.ObjectsBelow.RemoveAll();
            this.jump(this._jumpForce, 1000);
        }
    }

    public move(dx: number, dy: number) {
        if (this.x + dx > this.width / 2 && this.x + dx < this.stage.width - this.width / 2) {
            this.x += dx;
        }
        if (this.y + dx > this.height / 2 && this.y + dy < this.stage.height - this.height / 2) {
            this.y += dy;
        }
    }

    public jump(jumpForce: number, time: number) {
        if (this._onGround && !this._isJumping) {
            this._onGround = false;
            this._isJumping = true;
            egret.Tween.get(this).to({ y: this.y - jumpForce }, time, egret.Ease.backOut);
        }
    }

    public applyGravity() {
        if (!this._isJumping) {
            if (this.ObjectsBelow.Count != 0) {
                this._onGround = true;
                this._isJumping = false;
                this.y = (<GameObject>this.ObjectsBelow.Values()[0]).y - this.height;
            }
            else {
                this.y += this._gravity;
                this._onGround = false;
                this._isJumping = false;

                this.World.GameObjects.Values().forEach((go) => {
                    if (go != this && this.hitTestPoint(go.x, go.y, true)) {
                        this.ObjectsBelow.Add(go.hashCode.toString(), go);
                    }
                });
            }
        }
    }
}