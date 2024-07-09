"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

function subscribeToRoomInsert(onInsert: (payload: any) => void) {
	return supabase.channels.rooms.subscribeToInsert(onInsert);
}

export function NewRoomSubscriber() {
	const [data, setData] = useState<unknown>();

	function handleInsert(payload: any) {
		console.log("New room", payload);
		setData(payload);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const channel = subscribeToRoomInsert(handleInsert);
		console.log("Channel", channel);

		return () => {
			channel.unsubscribe();
		};
	}, []);

	return <pre> New Data : {JSON.stringify(data, null, 2)}</pre>;
}
