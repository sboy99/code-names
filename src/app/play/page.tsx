import { CreateGameRoom } from "@/components/game/create-room";
import { JoinGameRoom } from "@/components/game/join-room";

export default function Play() {
	return (
		<main className="grid place-items-center h-full">
			<div className="w-full grid place-items-center gap-2">
				<CreateGameRoom />
				<JoinGameRoom />
			</div>
		</main>
	);
}
