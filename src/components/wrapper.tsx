import type { PropsWithChildren } from "react";
import { Header } from "./header";

export const Wrapper = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
