import type { ICard } from "../types";
import type { IBase } from "./base";

export interface IRoom extends IBase {
	name: string;
	cards: ICard[];
}
