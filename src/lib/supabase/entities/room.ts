import type { IBase } from "./base";

export interface IRoom extends IBase {
	name: string;
	words: string[];
	red_indices: number[];
	blue_indices: number[];
	gray_indices: number[];
	black_indices: number[];
}
