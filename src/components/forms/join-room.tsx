"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSupabase } from "../supabase/hook";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
	roomId: z
		.string({ required_error: "Room id is required" })
		.min(1, "Room id must be at least 1 character"),
});

type TFormValues = z.infer<typeof FormSchema>;

type JoinRoomFormProps = {
	doOnSubmit: (roomId: string) => void;
};

export function JoinRoomForm(props: JoinRoomFormProps) {
	const supabase = useSupabase();
	const form = useForm<TFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			roomId: "",
		},
	});

	async function isRoomExist(roomId: string): Promise<boolean> {
		return await supabase.tables.rooms.isRoomExist(roomId);
	}

	async function onSubmit(values: TFormValues) {
		const isExist = await isRoomExist(values.roomId);
		if (isExist) {
			props.doOnSubmit(values.roomId);
			return;
		}
		form.setError("roomId", {
			type: "manual",
			message: "Room does not exist",
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="roomId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Room ID</FormLabel>
							<FormControl>
								<Input placeholder="Enter room id" {...field} />
							</FormControl>
							<FormDescription>Ask your friend for room id</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Join
				</Button>
			</form>
		</Form>
	);
}
