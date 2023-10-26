import { Component } from '@angular/core';
import { KanaService } from './services/kana.service';

@Component({
    selector: 'kana-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public questionKana: string;
    public answer: boolean = false;

    constructor(
        public kana: KanaService,
    ) {
        console.log(this.kana.getHiragana('a'));
        this.questionKana = this.kana.getRandomHiragana();
    }

    public checkAnswer(answer: string) {
        this.answer = this.questionKana === answer;
    }
}
