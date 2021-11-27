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
        let firstTitle = this.add.text(0,0, "ROAD", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop' });
        firstTitle.setPosition((window.innerWidth/2) - firstTitle.width/2, window.innerHeight/7);
        let secondTitle = this.add.text(0,150, "CONNECT", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop' });
        secondTitle.setPosition((window.innerWidth/2) - secondTitle.width/2, (window.innerHeight/7) + secondTitle.height);
        let playButton = this.add.text(0, 0, "PLAY", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop_full' });
        playButton.setPosition((window.innerWidth/2) - playButton.width/2, window.innerHeight*4/5);

        playButton.setInteractive();
        playButton.on("pointerup", () => {
            this.scene.start("LEVELS");
        })
    }
}