import { Injectable } from '@angular/core';
import { KanaSymbolType } from '../types/kana-symbol.type';
import { AlphabetType } from '../types/alphabet-symbols.type';
import { symbols } from '../data/symbols';

@Injectable({
    providedIn: 'root'
})
export class KanaService {

    public symbols: Map<string, KanaSymbolType> = new Map(
        symbols.map(symbol => [symbol.reading, symbol])
    );

    public katakana: AlphabetType = new Map([
        ['', ['ア', 'イ', 'ウ', 'エ', 'オ']],
        ['k', ['カ', 'キ', 'ク', 'ケ', 'コ']],
        ['s', ['サ', 'シ', 'ス', 'セ', 'ソ']],
        ['t', ['タ', 'チ', 'ツ', 'テ', 'ト']],
        ['n', ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ']],
        ['h', ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ']],
        ['m', ['マ', 'ミ', 'ム', 'メ', 'モ']],
        ['y', ['ヤ', '', 'ユ', '', 'ヨ']],
        ['r', ['ラ', 'リ', 'ル', 'レ', 'ロ']],
        ['w', ['ワ', '', '', '', 'ヲ']],
        ['N', ['ン', '', '', '', '']]
    ]);

    public hiragana: AlphabetType = new Map([
        ['', ['あ', 'い', 'う', 'え', 'お']],
        ['k', ['か', 'き', 'く', 'け', 'こ']],
        ['s', ['さ', 'し', 'す', 'せ', 'そ']],
        ['t', ['た', 'ち', 'つ', 'て', 'と']],
        ['n', ['な', 'に', 'ぬ', 'ね', 'の']],
        ['h', ['は', 'ひ', 'ふ', 'へ', 'ほ']],
        ['m', ['ま', 'み', 'む', 'め', 'も']],
        ['y', ['や', '', 'ゆ', '', 'よ']],
        ['r', ['ら', 'り', 'る', 'れ', 'ろ']],
        ['w', ['わ', '', '', '', 'を']],
        ['N', ['ん', '', '', '', '']],
    ]);

    public readings: Array<string> = [];

    private rows: Array<string> = this.getKeys(this.hiragana);
    private cols: Array<string> = ['a', 'i', 'u', 'e', 'o'];
    private colIndex: { [key: string]: number } = {'a': 0, 'i': 1, 'u': 2, 'e': 3, 'o': 4};


    constructor() {
        this.populateReadings();
    }


    public getRandomReading() {
        return this.readings[this.getRandomInt(this.readings.length - 1)];
    }

    public getRandomHiragana(): string {
        const reading = this.getRandomReading();
        console.log(reading);
        return this.getHiragana(reading);
    }

    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    getAlphabet(type: 'hiragana' | 'katakana'): AlphabetType {
        if (type === 'hiragana') {
            return this.hiragana;
        }
        return this.hiragana;
    }

    public getHiragana(reading: string): string {
        return this.getSymbol(reading).hiragana;
    }

    public getKatakana(reading: string): string {
        return this.getSymbol(reading).katakana;
    }

    private populateReadings(): void {
        this.rows
            .map((row: string): Array<string> => {
                if (row === 'y') {
                    return ['ya', 'yu', 'yo'];
                }
                if (row === 'N') {
                    return ['N'];
                }
                if (row === 'w') {
                    return ['wa', 'o']
                }
                return this.cols.map(col => row + col);
            })
            .map((push: Array<string>) => {
                push.forEach(symbol => this.readings.push(symbol));
            });
    }

    public getKeys(map: AlphabetType): Array<string> {
        return Array.from(map.keys());
    }

    getSymbol(reading: string): KanaSymbolType {
        const result: KanaSymbolType = this.symbols.get(reading)!;
        if (!result) {
            throw new Error(`Cannot find symbol with this reading: ${reading}`);
        }
        return result;
    }
}
