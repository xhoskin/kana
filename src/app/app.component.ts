import { Component } from '@angular/core';
import { KanaService } from './services/kana.service';
import { Layout } from './types/layout.type';

@Component({
    selector: 'kana-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public questionKana: string;
    public answer: boolean = false;
    public layout: Layout;

    constructor(
        public kana: KanaService,
    ) {
        console.log(this.kana.getHiragana('a'));
        this.questionKana = this.kana.getRandomHiragana();
        this.layout = this.kana.layout;
    }

    public checkAnswer(answer: string) {
        this.answer = this.questionKana === answer;
    }
}
