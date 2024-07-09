import { CreateGameRoom } from "@/components/create-room";
import { JoinGameRoom } from "@/components/join-room";
import { BasicLayout } from "@/components/layouts/basic";

export default function PlayPage() {
	return (
		<BasicLayout>
			<main className="grid place-items-center h-full">
				<div className="w-full grid place-items-center gap-2">
					<CreateGameRoom />
					<JoinGameRoom />
				</div>
			</main>
		</BasicLayout>
	);
}
