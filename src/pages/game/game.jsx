import { useLayoutEffect, useRef } from "react";
import StartGame from "./start-game";

export const PhaserGame = () => {
	const game = useRef();

	useLayoutEffect(() => {
		if (game.current === undefined) {
			game.current = StartGame({ parent: "game-container" });
		}

		return () => {
			if (game.current) {
				game.current.destroy(true);
				game.current = undefined;
			}
		};
	}, []);
	if (game.current === undefined) return;
	return <div id="game-container" />;
};
