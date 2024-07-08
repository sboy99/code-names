import type {
	RealtimeChannel,
	RealtimePostgresInsertPayload,
	SupabaseClient,
} from "@supabase/supabase-js";
import type { IRoom } from "../entities/room";

export class RoomsChannel {
	constructor(private readonly _supabaseClient: SupabaseClient) {}

	public subscribeToInsert(onInsert: (room: IRoom) => void): RealtimeChannel {
		function handleInsert(payload: RealtimePostgresInsertPayload<IRoom>) {
			onInsert(payload.new);
		}

		return this._supabaseClient
			.channel("rooms")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "rooms" },
				handleInsert,
			)
			.subscribe();
	}

	// -------------------------------PRIVATE--------------------------------- //
}
