export class LevelScene extends Phaser.Scene {
    constructor() {
        super({
            key: "LEVELS"
        })
    }
    init() {

    }
    preload() {
        this.load.image("level_button", "../assets/sprites/UI/red_button08.png");
    }
    create() {
        this.add.text(0,0, "LEVEL SELECTION", {fontSize:66.3, fontFamily: 'nonstop_full' });

        let levelOneSelect = this.createLevelButton (100, "1");
        levelOneSelect.setInteractive();
        levelOneSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "1"
            });
        })
        let levelTwoSelect = this.createLevelButton (200, "2");
        levelTwoSelect.setInteractive();
        levelTwoSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "2"
            });
        })
        let levelThreeSelect = this.createLevelButton (300, "3");
        levelThreeSelect.setInteractive();
        levelThreeSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "3"
            });
        })
        let levelFourSelect = this.createLevelButton (400, "4");
        levelFourSelect.setInteractive();
        levelFourSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "4"
            });
        })
    }
    createLevelButton (x, number) {
        let container = this.add.container(x,100, [
            this.add.image(0,0, "level_button"),
            this.add.text(-9,-20, number, {fontSize:34.92, fontFamily: 'nonstop_full' })
        ]).setSize(50, 50) ;
        return container;
    }
}