// import { supabase } from "@/lib/supabase";

import type { IRoom } from "@/domain/entities/room";
import { codeName } from "@/lib/code-name";

type PlayGroundPageProps = {
	params: {
		roomId: string;
	};
};

async function getRoomById(roomId: string): Promise<IRoom> {
	// return await supabase.tables.rooms.getRoomById(roomId);
	return {
		id: 18,
		created_at: "2024-07-08T17:50:43.152986+00:00",
		words: [
			"DANCE",
			"SMUGGLER",
			"BOND",
			"PARK",
			"EYE",
			"PART",
			"BEAT",
			"CALF",
			"BAND",
			"CHECK",
			"CHANGE",
			"BOOT",
			"ALPS",
			"AZTEC",
			"POLICE",
			"RACKET",
			"BEAR",
			"CRASH",
			"LOCK",
			"MOUNT",
			"BUTTON",
			"BATTERY",
			"ALIEN",
			"HAND",
			"DWARF",
		],
		red_indices: [11, 7, 15, 6, 0, 20, 3, 24],
		blue_indices: [2, 12, 21, 17, 10, 5, 18, 16],
		gray_indices: [9, 4, 14, 8, 1, 13, 22, 19],
		name: "sagar's room",
		black_indices: [23],
	};
}

export default async function PlayGroundPage(props: PlayGroundPageProps) {
	const roomData = await getRoomById(props.params.roomId);
	const { cards } = codeName.convertToGameState(roomData);

	console.log(cards);

	return (
		<div className="grid place-items-center gap-2">
			{cards.map((card) => (
				<div className="w-24 h-24 border" key={card.word}>
					{card.word}
				</div>
			))}
		</div>
	);
}
