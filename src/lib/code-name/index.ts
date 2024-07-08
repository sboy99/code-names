import { WordList } from "./data";

export interface ICodeName {
	words: string[];
	redIndices: number[];
	blueIndices: number[];
	grayIndices: number[];
	blackIndices: number[];
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

	public create(length = 25): ICodeName {
		const words = this.generateWords(length);
		const excludeIndexList: number[] = [];

		const blackIndices = this.selectRandomIndexes(length, 1, excludeIndexList);
		excludeIndexList.push(...blackIndices);
		const redIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...redIndices);
		const blueIndices = this.selectRandomIndexes(length, 8, excludeIndexList);
		excludeIndexList.push(...blueIndices);
		const grayIndices = this.selectRandomIndexes(length, 8, excludeIndexList);

		return { words, redIndices, blueIndices, grayIndices, blackIndices };
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
