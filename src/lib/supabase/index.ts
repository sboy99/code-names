import { type SupabaseClient, createClient } from "@supabase/supabase-js";
import { Channels } from "./channels";
import { Tables } from "./tables";

export class Supabase {
	private static _instance: Supabase;

	public tables: Tables;
	public channels: Channels;

	constructor() {
		const supabaseClient = this.getSupabaseClient();
		this.tables = new Tables(supabaseClient);
		this.channels = new Channels(supabaseClient);
	}

	public static getInstance(): Supabase {
		if (!Supabase._instance) {
			Supabase._instance = new Supabase();
		}

		return Supabase._instance;
	}

	// -------------------------------PRIVATE--------------------------------- //

	private getSupabaseClient(): SupabaseClient {
		return createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL as string,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
		);
	}
}

export const supabase = Supabase.getInstance();
