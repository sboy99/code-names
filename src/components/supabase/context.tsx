import type { Supabase } from "@/lib/supabase";
import { createContext } from "react";

export interface ISupabseContext {
	supabase: Supabase;
}

export const SupabaseContext = createContext<ISupabseContext>(
	{} as ISupabseContext,
);
