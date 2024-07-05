import type { TIconName } from "@/domain/types";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

type IconProps = LucideProps & {
	name: TIconName;
};

export function Icon({ name, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name]);
	return <LucideIcon {...props} />;
}
