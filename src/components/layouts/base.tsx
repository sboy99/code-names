import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Navbar } from "../navbar";

type BaseLayoutProps = ComponentProps<"div">;

export function BaseLayout({ className, ...props }: BaseLayoutProps) {
	return (
		<div className="flex flex-col w-full h-screen">
			<div className={cn("flex-1", className)} {...props} />
			<Navbar />
		</div>
	);
}
