import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
	constructor() {
		super("GameOverScene");
	}
	create() {
		this.add.image(400, 300, "bg");
		this.add.text(270, 200, "Game Over", {
			font: "48px Arial",
			color: "#ffffff",
		});
		this.add.text(250, 400, "Press Space to restart", {
			font: "32px Arial",
			color: "#ffffff",
		});
		this.input.keyboard?.on("keydown-SPACE", () => {
			this.scene.start("GameScene");
		});
	}
}
