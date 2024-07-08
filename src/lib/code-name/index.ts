import type { IRoom } from "@/domain/entities/room";
import { WordList } from "./data";

export type TCardColor = "RED" | "BLUE" | "BLACK" | "GRAY";

export interface ICard {
	color: TCardColor;
	word: string;
	isOpened: boolean;
}

export interface IGameState {
	cards: ICard[];
}

export class CodeName {
	private static _instance: CodeName;
	private _defaultWordList: string[] = [];

	constructor() {
		this._defaultWordList = WordList;
	}

	public static getInstance(): CodeName {
		if (!CodeName._instance) {
			CodeName._instance = new CodeName();
		}
		return CodeName._instance;
	}

	public create(length = 25): Omit<IRoom, "id" | "name" | "created_at"> {
		const words = this.generateWords(length);
		const excludeIndexList: number[] = [];

		const blackIndices = this.selectRandomIndexes(length, 1, excludeIndexList);
		excludeIndexList.push(...blackIndices);
		const redIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...redIndices);
		const blueIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...blueIndices);
		const grayIndices = this.selectRandomIndexes(length, 8, excludeIndexList);

		return {
			words,
			black_indices: blackIndices,
			red_indices: redIndices,
			blue_indices: blueIndices,
			gray_indices: grayIndices,
		};
	}

	public convertToGameState(codeNameRoom: IRoom): IGameState {
		const cards: ICard[] = [];

		for (const blackIndex of codeNameRoom.black_indices) {
			cards[blackIndex] = {
				color: "BLACK",
				word: codeNameRoom.words[blackIndex],
				isOpened: false,
			};
		}

		for (const redIndex of codeNameRoom.red_indices) {
			cards[redIndex] = {
				color: "RED",
				word: codeNameRoom.words[redIndex],
				isOpened: false,
			};
		}

		for (const blueIndex of codeNameRoom.blue_indices) {
			cards[blueIndex] = {
				color: "BLUE",
				word: codeNameRoom.words[blueIndex],
				isOpened: false,
			};
		}

		for (const grayIndex of codeNameRoom.gray_indices) {
			cards[grayIndex] = {
				color: "GRAY",
				word: codeNameRoom.words[grayIndex],
				isOpened: false,
			};
		}

		return {
			cards,
		};
	}

	// -------------------------------PRIVATE--------------------------------- //

	private generateWords(count: number): string[] {
		const suffledWords = this.shuffle(this._defaultWordList);
		return suffledWords.slice(0, count).map((word) => word.toUpperCase());
	}

	private shuffle<T>(wordList: T[]): T[] {
		return wordList.sort(() => Math.random() - 0.5);
	}

	private getRemaingIndexes(
		range: number,
		excludeIndexList: number[],
	): number[] {
		const allIndexes = Array.from(Array(range).keys());
		return allIndexes.filter((i) => !excludeIndexList.includes(i));
	}

	private selectRandomIndexes(
		range: number,
		count: number,
		excludeIndexList: number[],
	): number[] {
		const remainingIndexes = this.getRemaingIndexes(range, excludeIndexList);
		const suffledIndexes = this.shuffle(remainingIndexes);
		return suffledIndexes.slice(0, count);
	}
}

export const codeName = CodeName.getInstance();
