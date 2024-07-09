import { type CodeName, codeName } from "@/lib/code-name";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { IRoom } from "@/domain/entities/room";
import type { Database, Json } from "../schema";

export class RoomsTable {
	private readonly _codeName: CodeName;
	constructor(private readonly _supabaseClient: SupabaseClient<Database>) {
		this._codeName = codeName;
	}

	public async createRoom(name: string) {
		const cards = this._codeName.createCards() as unknown as Json[];
		return await this._supabaseClient.from("rooms").insert([
			{
				name,
				cards,
			},
		]);
	}

	public async listRooms(): Promise<IRoom[]> {
		const result = await this._supabaseClient
			.from("rooms")
			.select("*", {
				count: "exact",
			})
			.limit(10);
		return result.data as unknown as IRoom[];
	}

	public async isRoomExist(id: string): Promise<boolean> {
		const result = await this._supabaseClient
			.from("rooms")
			.select("id")
			.eq("id", id);

		return result.data?.length === 1;
	}

	public async getRoomById(id: string): Promise<IRoom | null> {
		const result = await this._supabaseClient
			.from("rooms")
			.select("*")
			.eq("id", id);

		return result.data?.[0] as unknown as IRoom | null;
	}

	// -------------------------------PRIVATE--------------------------------- //
}
