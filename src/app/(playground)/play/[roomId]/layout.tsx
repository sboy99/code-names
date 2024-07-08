import { PlaygroundNavbar } from "@/components/playground/navbar";
// import { supabase } from "@/lib/supabase";
import type { PropsWithChildren } from "react";

type PlayLayoutPageProps = PropsWithChildren<{
	params: {
		roomId: string;
	};
}>;

// async function getRoomById(roomId: string) {
// 	return await supabase.tables.rooms.getRoomById(roomId);
// }

export default async function PlayLayout(props: PlayLayoutPageProps) {
	// const roomData = await getRoomById(props.params.roomId);

	// if (!roomData) {
	// 	return <div>Room not found</div>;
	// }

	return (
		<div className="flex flex-col w-full h-screen">
			<PlaygroundNavbar roomName={"Sagar's Room"} />
			<div className="flex-1 p-2">{props.children}</div>
		</div>
	);
}
