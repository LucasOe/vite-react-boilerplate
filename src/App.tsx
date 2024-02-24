import { useState } from "react";
import viteLogo from "/vite.svg";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} alt="Vite logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="bg-red-200">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}
