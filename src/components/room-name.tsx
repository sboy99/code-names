type RoomNameProps = {
	name: string;
};

export function RoomName(props: RoomNameProps) {
	return (
		<h2 className="font-mono capitalize font-semibold tracking-tight text-lg">
			{props.name}
		</h2>
	);
}
