import {MenuScene} from "./scenes/MenuScene.js";
import {LevelScene} from "./scenes/LevelScene.js";
import {PlayScene} from "./scenes/PlayScene.js";

let game = new Phaser.Game({
    type: Phaser.CANVAS,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    maxHeight: 300 * window.devicePixelRatio,
    backgroundColor: '#23BF8E',
    scene: [
       MenuScene, LevelScene, PlayScene
    ]
});

