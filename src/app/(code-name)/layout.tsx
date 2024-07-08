import { BasicLayout } from "@/components/layouts/basic";
import type { PropsWithChildren } from "react";

export default function HomeLayout(props: PropsWithChildren) {
	return <BasicLayout>{props.children}</BasicLayout>;
}
