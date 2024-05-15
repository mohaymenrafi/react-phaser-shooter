import Phaser from "phaser";

export default class WinScene extends Phaser.Scene {
	constructor() {
		super("WinScene");
	}
	create() {
		this.add.image(400, 300, "bg");
		this.add.text(200, 300, "Congrats, you won the game", {
			font: "32px Arial",
			color: "#ffffff",
		});
		setTimeout(() => {
			window.location.href = "/";
		}, 2000);
	}
}
