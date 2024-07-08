import { CreateRoomForm } from "../forms/create-room";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

export async function CreateGameRoom() {
	return (
		<Dialog>
			{/* Trigger Button */}
			<DialogTrigger asChild>
				<Button className="w-full max-w-80">Create Room</Button>
			</DialogTrigger>
			{/* Content */}
			<DialogContent>
				<DialogHeader className="text-left">
					<DialogTitle>Create Room</DialogTitle>
					<DialogDescription>
						Create a room, that your friends can join.
					</DialogDescription>
				</DialogHeader>
				<CreateRoomForm />
			</DialogContent>
		</Dialog>
	);
}
