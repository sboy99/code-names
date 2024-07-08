"use client";

import { type Supabase, supabase as supabaseClient } from "@/lib/supabase";
import { type PropsWithChildren, useState } from "react";
import { SupabaseContext } from "./context";

export function SupabaseProvider(props: PropsWithChildren) {
	const [supabase] = useState<Supabase>(supabaseClient);

	return (
		<SupabaseContext.Provider
			value={{
				supabase,
			}}
		>
			{props.children}
		</SupabaseContext.Provider>
	);
}
