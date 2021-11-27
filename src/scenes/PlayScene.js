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
        this.load.image('road_tiles', '../assets/tilemaps/road_tileset.png')
        this.load.tilemapTiledJSON("level_one", "../assets/tilemaps/level_one.json");
        this.load.tilemapTiledJSON("level_two", "../assets/tilemaps/level_two.json");
        this.load.tilemapTiledJSON("level_three", "../assets/tilemaps/level_three.json");
        this.load.tilemapTiledJSON("level_four", "../assets/tilemaps/level_four.json");
    }
    create() {
        this.add.text(0, 0, "LEVEL " + this.level_number, {fontSize: 66.3, fontFamily: 'nonstop_full'});

        let levelIcon = this.add.image(300, 400, "horiz_bars");
        levelIcon.setInteractive();
        levelIcon.on("pointerup", () => {
            this.scene.start("LEVELS");
        })

        let level_key = "";
        if (this.level_number == "1") {
            level_key = "level_one"
        }
        else if (this.level_number == "2") {
            level_key = "level_two"
        }
        else if (this.level_number == "3") {
            level_key = "level_three"
        }
        else if (this.level_number == "4") {
            level_key = "level_four"
        }

        let level = this.make.tilemap({key: level_key});
        let tileset = level.addTilesetImage('road_tileset', 'road_tiles');
        let layer = level.createLayer('road_layer', tileset);
        let tileArray = layer.getTilesWithin(0,0,4,4,{isNotEmpty: true})
        for (let i = 0; i < tileArray.length; i++) {
            let container = this.add.container(layer.tileToWorldX(tileArray[i].x)+64,layer.tileToWorldY(tileArray[i].y)+64, [
                
            ]).setSize(128, 128);
            container.setInteractive();
            container.on("pointerup", () => {
                tileArray[i].rotation += 3.1415/2;
            })
            console.debug(tileArray[i]);
        }
        //level.getTileAt(1,1,'road_layer').rotation += 3.1415/2;
    }
}