import { Component, Input } from '@angular/core';

@Component({
    selector: 'kana-symbol',
    templateUrl: './symbol.component.html',
    styleUrls: ['./symbol.component.css']
})
export class SymbolComponent {
    @Input() public alphabet: 'hiragana' | 'katakana' = 'hiragana';
    @Input() public symbol: string = '';
    @Input() public size: 'M'|'L' = 'M';
    
}
