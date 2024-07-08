"use client";

import type { Supabase } from "@/lib/supabase";
import { useContext } from "react";
import { SupabaseContext } from "./context";

export function useSupabase(): Supabase {
	return useContext(SupabaseContext).supabase;
}
