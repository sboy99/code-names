export interface IRoom {
	id: number;
	name: string;
	words: string[];
	red_indexes: number[];
	blue_indexes: number[];
	gray_indexes: number[];
	dead_index: number;
	created_at: string;
}
