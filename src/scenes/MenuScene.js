export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MENU"
        })
    }
    init() {

    }
    preload() {
        this.load.audio("ost", "../assets/audio/music/Funky Chill 2 loop.wav");
        this.load.audio("click", "../assets/audio/sfx/DefaultClick.ogg");
    }
    create() {
        let ost1 = this.sound.add("ost");
        ost1.loop = true;
        ost1.play();
        ost1.setVolume(0.3);
        let clickSound = this.sound.add("click");

        this.firstTitle = this.add.text(0,0, "ROAD", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop' });
        this.firstTitle.setPosition(-60, window.innerHeight/7);
        this.secondTitle = this.add.text(0,150, "CONNECT", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop' });
        this.secondTitle.setPosition(window.innerWidth, (window.innerHeight/7) + this.secondTitle.height);
        let playButton = this.add.text(0, 0, "PLAY", {fontSize:250 * window.innerWidth / 1800, fontFamily: 'nonstop_full' });
        playButton.setPosition((window.innerWidth/2) - playButton.width/2, window.innerHeight*4/5);

        playButton.setInteractive();
        playButton.on("pointerup", () => {
            clickSound.play();
            this.scene.start("LEVELS");
        })
    }
    update() {
        if (this.firstTitle.x < (window.innerWidth/2) - this.firstTitle.width/2) {
            this.firstTitle.x += 20;
        }
        if (this.secondTitle.x > (window.innerWidth/2) - this.secondTitle.width/2) {
            this.secondTitle.x -= 20;
        }
    }
}