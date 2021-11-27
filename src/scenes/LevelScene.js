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
        let levelTitle = this.add.text(0,0, "LEVEL SELECTION", {fontSize:160 * window.innerWidth / 1800, fontFamily: 'nonstop_full' });
        levelTitle.setPosition((window.innerWidth/2) - levelTitle.width/2, window.innerHeight/10);

        let levelOneSelect = this.createLevelButton (-300, "1");
        levelOneSelect.setInteractive();
        levelOneSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "1"
            });
        })
        let levelTwoSelect = this.createLevelButton (-100, "2");
        levelTwoSelect.setInteractive();
        levelTwoSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "2"
            });
        })
        let levelThreeSelect = this.createLevelButton (100, "3");
        levelThreeSelect.setInteractive();
        levelThreeSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "3"
            });
        })
        let levelFourSelect = this.createLevelButton (300, "4");
        levelFourSelect.setInteractive();
        levelFourSelect.on("pointerup", () => {
            this.scene.start("PLAY", {
                "level_number": "4"
            });
        })
    }
    createLevelButton (x, number) {
        let buttonSprite = this.add.image(0,0, "level_button");
        buttonSprite.setScale(3);
        let container = this.add.container((window.innerWidth/2) - 25 + x, window.innerHeight/10 + 300, [
            buttonSprite,
            this.add.text(-20,-40, number, {fontSize:130000/window.innerWidth, fontFamily: 'nonstop_full' })
        ]).setSize(50*3, 50*3);
        return container;
    }
}