import { supabase } from "@/lib/supabase";

type PlayGroundPageProps = {
	params: {
		roomId: string;
	};
};

async function getRoomById(roomId: string) {
	return await supabase.tables.rooms.getRoomById(roomId);
}

export default async function PlayGroundPage(props: PlayGroundPageProps) {
	const roomData = await getRoomById(props.params.roomId);

	return (
		<div>
			<strong>{roomData?.name}</strong>
			<pre>{JSON.stringify(roomData, null, 2)}</pre>
		</div>
	);
}
