import type { ColorClassEnum } from "../enums";

export interface ICard {
	colorClass: ColorClassEnum;
	word: string;
	isOpened: boolean;
}
