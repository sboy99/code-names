import { PlaygroundLayout } from "@/components/layouts/playground";
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
	const room = await getRoomById(props.params.roomId);
	if (!room) {
		return <div>Room not found</div>;
	}
	return (
		<PlaygroundLayout roomName={room.name}>
			<div className="playground">
				{room.cards.map((card) => (
					<div className={`border ${card.colorClass}`} key={card.word}>
						{card.word}
					</div>
				))}
			</div>
		</PlaygroundLayout>
	);
}
