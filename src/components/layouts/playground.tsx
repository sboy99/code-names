import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { PlaygroundNavbar } from "../navbars/playground";

type PlaygroundLayoutPageProps = ComponentProps<"div"> & {
	roomName: string;
};

export function PlaygroundLayout({
	roomName,
	className,
	...props
}: PlaygroundLayoutPageProps) {
	return (
		<div className="flex flex-col w-full h-screen">
			<PlaygroundNavbar roomName={roomName} />
			<div className={cn("flex-1 p-2", className)} {...props} />
		</div>
	);
}
