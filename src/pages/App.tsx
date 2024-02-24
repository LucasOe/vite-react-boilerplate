import { useState } from "react";

import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="text-center">
			<div className="not-prose flex justify-center">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="focus rounded">
					<img //
						src={viteLogo}
						className="size-36 p-6 transition-[filter] hover:drop-shadow"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer" className="focus rounded">
					<img //
						src={reactLogo}
						className="size-36 animate-slow-spin p-6 transition-[filter] hover:drop-shadow"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="p-4">
				<button
					onClick={() => setCount((count) => count + 1)}
					className="focus rounded-lg border border-transparent bg-neutral-900 px-6 py-3 text-base font-medium transition-colors hover:border-blue-400"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="text-neutral-500">Click on the Vite and React logos to learn more</p>
		</div>
	);
}
