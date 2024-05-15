import styles from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
	const lastScore = localStorage.getItem("lastScore");

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Welcome to Space Shooter</h2>
			<p className={styles.description}>Score 15 points to win the game</p>
			{lastScore && (
				<div className={styles.scoreWrapper}>
					Your last score: <span className={styles.score}>{lastScore}</span>
				</div>
			)}
			<Link to="/play" className={styles.playBtn}>
				{lastScore ? <span>Play again</span> : <span>Play</span>}
			</Link>
		</div>
	);
}
