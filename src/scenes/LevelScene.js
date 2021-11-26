export class LevelScene extends Phaser.Scene {
    constructor() {
        super({
            key: "LEVELS"
        })
    }
    init() {

    }
    preload() {
        this.load.image("play_button", "../assets/sprites/Icon.png");
    }
    create() {
        this.add.image(0,0, "play_button");
    }
}