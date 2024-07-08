import { BackButton } from "./back-button";
import { RoomName } from "./room-name";

type PlaygroundNavbarProps = {
	roomName: string;
};

export function PlaygroundNavbar(props: PlaygroundNavbarProps) {
	return (
		<nav className="h-14 border-b p-2 flex items-center gap-2">
			<BackButton />
			<RoomName name={props.roomName} />
		</nav>
	);
}
