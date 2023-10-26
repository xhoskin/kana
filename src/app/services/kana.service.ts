import { Injectable } from '@angular/core';
import { KanaSymbolType } from '../types/kana-symbol.type';
import { symbols } from '../data/symbols';
import { Layout } from '../types/layout.type';
import { AlphabetType } from '../types/alphabet.type';

@Injectable({
    providedIn: 'root'
})
export class KanaService {
    public symbolsArray = symbols;
    public symbolsMap: Map<string, KanaSymbolType> = new Map(
        symbols.map(symbol => [symbol.reading, symbol])
    );

    public layout: Layout = [
        ['a',  'i',  'u',  'e',  'o' ],
        ['ka', 'ki', 'ku', 'ke', 'ko'],
        ['sa', 'si', 'su', 'se', 'so'],
        ['ta', 'chi','tsu','te', 'to'],
        ['na', 'ni', 'nu', 'ne', 'no'],
        ['ha', 'hi', 'hu', 'he', 'ho'],
        ['ma', 'mi', 'mu', 'me', 'mo'],
        ['ya', null, 'yu', null, 'yo'],
        ['ra', 'ri', 'ru', 're', 'ro'],
        ['wa', null, null, null, 'wo' ],
        ['n',  null, null, null, null],
    ];

    public getRandomSymbol(): KanaSymbolType {
        return this.symbolsArray[this.getRandomInt(this.symbolsArray.length - 1)];
    }

    public getRandomReading(): string {
        return this.getRandomSymbol().reading;
    }

    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    public getHiragana(reading: string): string {
        return this.getSymbol(reading).hiragana;
    }

    public getKatakana(reading: string): string {
        return this.getSymbol(reading).katakana;
    }

    public getKana(reading: string, alphabet: AlphabetType): string {
        if (alphabet === 'hiragana') {
            return this.getHiragana(reading);
        }
        return this.getKatakana(reading);
    }

    getSymbol(reading: string): KanaSymbolType {
        const result: KanaSymbolType = this.symbolsMap.get(reading)!;
        if (!result) {
            throw new Error(`Cannot find symbol with this reading: ${reading}`);
        }
        return result;
    }
}
