import { ColorClassEnum } from "@/domain/enums";
import type { ICard } from "@/domain/types";
import { WordList } from "./data";

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

	public createCards(length = 25): ICard[] {
		const words = this.generateWords(length);
		const excludeIndexList: number[] = [];

		const blackIndices = this.selectRandomIndexes(length, 1, excludeIndexList);
		excludeIndexList.push(...blackIndices);
		const redIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...redIndices);
		const blueIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...blueIndices);
		const grayIndices = this.selectRandomIndexes(length, 8, excludeIndexList);

		return this.getSerializeCards(
			blackIndices,
			redIndices,
			blueIndices,
			grayIndices,
			words,
		);
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

	private getSerializeCards(
		blackIndices: number[],
		redIndices: number[],
		blueIndices: number[],
		grayIndices: number[],
		words: string[],
	): ICard[] {
		const cards: ICard[] = [];

		for (const blackIndex of blackIndices) {
			cards[blackIndex] = {
				colorClass: ColorClassEnum.BLACK,
				word: words[blackIndex],
				isOpened: false,
			};
		}

		for (const redIndex of redIndices) {
			cards[redIndex] = {
				colorClass: ColorClassEnum.RED,
				word: words[redIndex],
				isOpened: false,
			};
		}

		for (const blueIndex of blueIndices) {
			cards[blueIndex] = {
				colorClass: ColorClassEnum.BLUE,
				word: words[blueIndex],
				isOpened: false,
			};
		}

		for (const grayIndex of grayIndices) {
			cards[grayIndex] = {
				colorClass: ColorClassEnum.GRAY,
				word: words[grayIndex],
				isOpened: false,
			};
		}

		return cards;
	}
}

export const codeName = CodeName.getInstance();
