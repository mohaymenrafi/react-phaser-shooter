import { Link } from "react-router-dom";
import { PhaserGame } from "./game";

export default function Game() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				paddingTop: "2rem",
			}}
		>
			<div>
				<Link
					style={{
						background: "black",
						color: "white",
						textDecoration: "none",
						fontSize: "1.5rem",
						padding: "6px 18px",
					}}
					to="/"
				>
					Home
				</Link>
			</div>
			<div style={{ padding: "2rem" }}>
				<PhaserGame />
			</div>
		</div>
	);
}
