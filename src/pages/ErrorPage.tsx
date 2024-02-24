import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Button from "@/components/Button";

export default function ErrorPage() {
	const error = useRouteError();
	if (!isRouteErrorResponse(error)) return;

	return (
		<div className="not-prose text-center">
			<h1 className="font-mono text-[12rem] font-bold leading-none">{error.status}</h1>
			<p className="text-5xl font-medium text-neutral-500">{error.statusText}</p>
			<Button to="/" text="Go Home" className="m-8" />
		</div>
	);
}
