import type { SupabaseClient } from "@supabase/supabase-js";
import { RoomsTable } from "./rooms";

export class Tables {
	public rooms: RoomsTable;

	constructor(supabaseClient: SupabaseClient) {
		this.rooms = new RoomsTable(supabaseClient);
	}
}
