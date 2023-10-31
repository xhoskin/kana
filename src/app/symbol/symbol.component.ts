import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanaService } from '../services/kana.service';
import { AlphabetType } from '../types/alphabet.type';

@Component({
    selector: 'kana-symbol',
    templateUrl: './symbol.component.html',
    styleUrls: ['./symbol.component.css']
})
export class SymbolComponent {
    @Input() public alphabet: AlphabetType = 'hiragana';
    @Input() public reading: string | null = null;
    @Input() public size: 'M'|'L' = 'M';
    @Input() public showTitle: boolean = true;

    @Output() public clicked: EventEmitter<string> = new EventEmitter<string>();

    get title(): string {
        return this.showTitle ? this.reading || '' : '';
    }

    constructor(
        private kana: KanaService
    ) {
    }

    getKana(reading: string): string {
        return this.kana.getKana(reading, this.alphabet);
    }
}
