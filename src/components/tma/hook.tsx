import { useContext } from "react";
import { TelegramContext } from "./context";

export function useTma() {
	return useContext(TelegramContext);
}
