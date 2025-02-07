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
import { useToast } from "../ui/use-toast";

const FormSchema = z.object({
	roomName: z
		.string({ required_error: "Room name is required" })
		.min(3, "Room name must be at least 3 characters"),
});

type TFormValues = z.infer<typeof FormSchema>;

type CreateRoomFormProps = {
	doOnSubmit: () => void;
};

export function CreateRoomForm(props: CreateRoomFormProps) {
	const supabase = useSupabase();
	const { toast } = useToast();
	const form = useForm<TFormValues>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			roomName: "sagar's room",
		},
	});

	async function createRoom(name: string) {
		const res = await supabase.tables.rooms.createRoom(name);
		return res.status === 201
			? "Room created successfully"
			: "Failed to create room";
	}

	async function onSubmit(values: TFormValues) {
		const message = await createRoom(values.roomName);
		toast({
			description: message,
		});
		props.doOnSubmit();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="roomName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Room Name</FormLabel>
							<FormControl>
								<Input defaultValue={field.value} {...field} />
							</FormControl>
							<FormDescription>This is your public room name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Create
				</Button>
			</form>
		</Form>
	);
}
