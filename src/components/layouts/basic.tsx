import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { BasicNavbar } from "../navbars/basic";

type BasicLayoutProps = ComponentProps<"div">;

export function BasicLayout({ className, ...props }: BasicLayoutProps) {
	return (
		<div className="flex flex-col w-full h-screen">
			<div className={cn("flex-1", className)} {...props} />
			<BasicNavbar />
		</div>
	);
}
