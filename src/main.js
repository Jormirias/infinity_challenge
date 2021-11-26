import {MenuScene} from "./scenes/MenuScene.js";
import {LevelScene} from "./scenes/LevelScene.js";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 480,
    backgroundColor: '#23BF8E',
    scene: [
       MenuScene, LevelScene
    ]
});

