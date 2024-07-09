"use client";

import { useRouter } from "next/navigation";
import { Icon } from "../icon";
import { Button } from "../ui/button";

export function BackButton() {
	const router = useRouter();

	function handleBack() {
		router.back();
	}

	return (
		<Button type="button" onClick={handleBack} variant={"ghost"} size={"icon"}>
			<Icon name="arrow-left" />
		</Button>
	);
}
