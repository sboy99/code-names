import { supabase } from "@/lib/supabase";
import type { IRoom } from "@/lib/supabase/entities/room";

async function getGameRooms() {
	const rooms = await supabase.tables.rooms.listRooms();
	return rooms;
}

function subscribeToInsertRooms(onInsert: (payload: any) => void) {
	return supabase.channels.rooms.subscribeToInsert(onInsert);
}

export async function ListGameRooms() {
	const rooms = await getGameRooms();
	subscribeToInsertRooms((room: IRoom) => {
		console.log("New room", room);
	});

	console.log(supabase);

	return <pre>{JSON.stringify(rooms, null, 2)}</pre>;
}
