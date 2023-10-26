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

    @Output() public clicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private kana: KanaService
    ) {
    }

    getKana(reading: string): string {
        return this.kana.getKana(reading, this.alphabet);
    }
}
