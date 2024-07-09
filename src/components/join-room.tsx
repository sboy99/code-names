"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { JoinRoomForm } from "./forms/join-room";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

export function JoinGameRoom() {
	const router = useRouter();
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

	function closeDialog() {
		setIsDialogOpen(false);
	}

	function handleFormSubmit(roomId: string) {
		router.push(`/play/${roomId}`);
		closeDialog();
	}

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			{/* Trigger Button */}
			<DialogTrigger asChild>
				<Button className="w-full max-w-80" variant={"outline"}>
					Join Room
				</Button>
			</DialogTrigger>
			{/* Content */}
			<DialogContent>
				<DialogHeader className="text-left">
					<DialogTitle>Join Room</DialogTitle>
					<DialogDescription>
						Join a room, that your friend has created.
					</DialogDescription>
				</DialogHeader>
				<JoinRoomForm doOnSubmit={handleFormSubmit} />
			</DialogContent>
		</Dialog>
	);
}
