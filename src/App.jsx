import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import GameIndex from "./pages/game";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/play" element={<GameIndex />} />
			<Route path="*" element={<h1>Not Found</h1>} />
		</Routes>
	);
}

export default App;
