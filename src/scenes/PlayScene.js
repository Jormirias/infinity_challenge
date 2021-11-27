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

        let levelIcon = this.add.image(300, 400, "horiz_bars");
        levelIcon.setInteractive();
        levelIcon.on("pointerup", () => {
            this.scene.start("LEVELS");
        })
        levelIcon.setScale(3);
        levelIcon.setPosition((window.innerWidth/2) - levelIcon.width/6, window.innerHeight*9/10);

        let level_key = "";
        let level_solution = "";
        let next_level = "";
        if (this.level_number == "1") {
            level_key = "level_one";
            level_solution = [
                {sin: 0, cos: 1},
                {sin: 1, cos: 0},
                {sin: -1, cos: 0},
                {sin: 0, cos: -1}
            ];
            next_level = "2";
        } else if (this.level_number == "2") {
            level_key = "level_two"
            next_level = "3";
            level_solution = [
                {sin: 0, cos: 1},
                {sin: 0, cos: -1},
                {sin: -1, cos: 0},
                {sin: 1, cos: 0},
                {sin: 0, cos: 1},
                {sin: 0, cos: -1}
            ];
        } else if (this.level_number == "3") {
            level_key = "level_three"
            next_level = "4";
            level_solution = [
                {sin: 0, cos: 1},
                {sin: 1, cos: 0},
                {sin: -1, cos: 0},
                {sin: 0},
                {sin: 0}
            ];
        } else if (this.level_number == "4") {
            level_key = "level_four"
            next_level = "end";
            level_solution = [
                {sin: 1, cos: 0},
                {sin: 1, cos: 0},
                {sin: 0, cos: 1},
                {sin: 0, cos: -1},
                {sin: 0, cos: 1},
                {sin: 1, cos: 0},
                {},
                {},
                {},
                {},
                {sin: -1, cos: 0},
                {sin: 0, cos: -1},
                {sin: -1, cos: 0},
                {sin: 0, cos: -1}
            ];
        }

        if (this.level_number != "end") {
            //title
            let playTitle = this.add.text(0, 0, "LEVEL " + this.level_number, {fontSize:160 * window.innerWidth / 1800, fontFamily: 'nonstop_full'});
            playTitle.setPosition((window.innerWidth/2) - playTitle.width/2, window.innerHeight/15);

            //generates level map from tilemaps
            let level = this.make.tilemap({key: level_key});
            let tileset = level.addTilesetImage('road_tileset', 'road_tiles');
            let layer = level.createLayer('road_layer', tileset);
            let tileArray = layer.getTilesWithin(0, 0, 4, 4, {isNotEmpty: true});
            layer.setPosition((window.innerWidth/2) - layer.width/2, window.innerHeight/15 + playTitle.height);

            //generates containers to detect interaction
            for (let i = 0; i < tileArray.length; i++) {
                let container = this.add.container(layer.tileToWorldX(tileArray[i].x) + 64, layer.tileToWorldY(tileArray[i].y) + 64).setSize(128, 128);
                container.setInteractive();
                container.on("pointerup", () => {
                    this.spriteRotator(level_solution, tileArray, tileArray[i], next_level);
                })
            }
        }
        else {
            let endMessage1 = this.add.text(0, 0, "ALL", {fontSize:130 * window.innerWidth / 1800, fontFamily: 'nonstop_full'});
            endMessage1.setPosition((window.innerWidth/2) - endMessage1.width/2, window.innerHeight*1/10);
            let endMessage2 = this.add.text(0, 100, "LEVELS", {fontSize:130 * window.innerWidth / 1800, fontFamily: 'nonstop_full'});
            endMessage2.setPosition((window.innerWidth/2) - endMessage2.width/2, window.innerHeight*1/10+endMessage1.height);
            let endMessage3 = this.add.text(0, 200, "CLEARED!", {fontSize:130 * window.innerWidth / 1800, fontFamily: 'nonstop_full'});
            endMessage3.setPosition((window.innerWidth/2) - endMessage3.width/2, window.innerHeight*1/10+endMessage2.height*2);
            let endMessage4 = this.add.text(0, 300, "=)", {fontSize:130 * window.innerWidth / 1800, fontFamily: 'nonstop_full'});
            endMessage4.setPosition((window.innerWidth/2) - endMessage4.width/2, (window.innerHeight*1/10)+(endMessage3.height*3));
        }
    }
    //rotates sprite and compares puzzle to solution
    spriteRotator(levelSolution, tileArray, tile, next_level) {
        tile.rotation += 3.14159265359/2;

        for (let i = 0; i < tileArray.length; i++) {
            if (typeof levelSolution[i].sin !== 'undefined' && levelSolution[i].sin != Math.round(Math.sin(tileArray[i].rotation)))
                break;
            if (typeof levelSolution[i].cos !== 'undefined' && levelSolution[i].cos != Math.round(Math.cos(tileArray[i].rotation)))
                break;
            else if (i == tileArray.length - 1){
                this.scene.start("PLAY", {
                    "level_number": next_level
                });
            }

        }
        console.debug(tile.rotation);
        console.debug(Math.round(Math.sin(tile.rotation)));
        console.debug(Math.round(Math.cos(tile.rotation)));
    }
}