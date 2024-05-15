import Phaser from "phaser";
import { config } from "./config";

export default function StartGame({ parent }) {
	return new Phaser.Game({ ...config, parent });
}
