import type { SupabaseClient } from "@supabase/supabase-js";
import type { IRoom } from "../entities/room";

export class RoomsTable {
	constructor(private readonly _supabaseClient: SupabaseClient) {}

	public async createRoom(name: string) {
		return await this._supabaseClient.from("rooms").insert([{ name }]);
	}

	public async listRooms(): Promise<IRoom[]> {
		const result = await this._supabaseClient
			.from("rooms")
			.select("*", {
				count: "exact",
			})
			.limit(10);
		return result.data as IRoom[];
	}

	// -------------------------------PRIVATE--------------------------------- //
}
