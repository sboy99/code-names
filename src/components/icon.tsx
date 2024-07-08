import type { TIconName } from "@/domain/types";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

type IconProps = LucideProps & {
	name: TIconName;
};

export function Icon({ name, className, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name]);
	return <LucideIcon className={cn("w-6 h-6", className)} {...props} />;
}
