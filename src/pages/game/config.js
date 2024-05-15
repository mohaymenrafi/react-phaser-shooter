import Phaser from "phaser";
import PreloadScene from "./scenes/Preload";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/GameScene";
import GameOverScene from "./scenes/GameOver";
import WinScene from "./scenes/Win";

export const config = {
	parent: "game-container",
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0, x: 0 },
			debug: false,
		},
	},
	scene: [PreloadScene, StartScene, GameScene, GameOverScene, WinScene],
};
