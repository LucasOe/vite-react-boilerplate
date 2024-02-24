import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ComponentProps<typeof Link> & {
	text: string;
	to: string;
};

export default function Button({ text, to, ...rest }: ButtonProps) {
	return (
		<Link
			{...rest}
			to={to}
			className={twMerge(
				"not-prose focus inline-block rounded-lg bg-neutral-300 p-1 px-5 font-medium text-neutral-900 no-underline outline-none hover:bg-neutral-100",
				rest.className
			)}
		>
			{text}
		</Link>
	);
}
