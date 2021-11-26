export class PlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PLAY"
        })
    }
    init(data) {
        this.level_number = data.level_number;
    }
    preload() {
        this.load.image("horiz_bars", "../assets/sprites/UI/barsHorizontal.png");
    }
    create() {
        this.add.text(0,0, this.level_number, {fontSize:66.3, fontFamily: 'nonstop' });

        let levelIcon = this.add.image(300,400, "horiz_bars");
        levelIcon.setInteractive();
        levelIcon.on("pointerup", () => {
            this.scene.start("LEVELS");
        })
    }
}