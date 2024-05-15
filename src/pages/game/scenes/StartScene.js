import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
	constructor() {
		super("StartScene");
	}
	create() {
		this.add.image(400, 300, "bg");
		this.add.text(200, 300, "Press Space to start the game", {
			font: "32px Arial",
			color: "#ffffff",
		});
		this.input.keyboard?.on("keydown-SPACE", () => {
			this.scene.start("GameScene");
		});
	}
}
