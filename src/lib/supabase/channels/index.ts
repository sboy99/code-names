import type { SupabaseClient } from "@supabase/supabase-js";
import { RoomsChannel } from "./rooms";

export class Channels {
	public rooms: RoomsChannel;

	constructor(supabaseClient: SupabaseClient) {
		this.rooms = new RoomsChannel(supabaseClient);
	}
}
