import { PlayGroundLayout } from "@/components/layouts/playground";
import type { PropsWithChildren } from "react";

export default function PlayLayout(props: PropsWithChildren) {
	return <PlayGroundLayout className="p-2">{props.children}</PlayGroundLayout>;
}
