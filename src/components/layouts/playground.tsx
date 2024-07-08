import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { PlaygroundNavbar } from "../navbars/playground";

type PlaygroundLayoutProps = ComponentProps<"div">;

export function PlayGroundLayout({
	className,
	...props
}: PlaygroundLayoutProps) {
	return (
		<div className="flex flex-col w-full h-screen">
			<PlaygroundNavbar />
			<div className={cn("flex-1", className)} {...props} />
		</div>
	);
}
