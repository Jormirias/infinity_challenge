export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MENU"
        })
    }
    init() {

    }
    preload() {

    }
    create() {
        this.add.text(0,0, "ROAD", {fontSize:66.3, fontFamily: 'nonstop' });
        this.add.text(0,150, "CONNECT", {fontSize:66.3, fontFamily: 'nonstop' });
        let playButton = this.add.text(0,400, "PLAY", {fontSize:66.3, fontFamily: 'nonstop_full' });

        playButton.setInteractive();
        playButton.on("pointerup", () => {
            this.scene.start("LEVELS");
        })
    }
}