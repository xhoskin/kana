import { Component } from '@angular/core';
import { KanaService } from './services/kana.service';
import { Layout } from './types/layout.type';

@Component({
    selector: 'kana-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public question: string;
    public answer: boolean | null = null;
    public layout: Layout;

    constructor(
        public kana: KanaService,
    ) {
        this.question = this.kana.getRandomReading();
        this.layout = this.kana.layout;
    }

    public checkAnswer(answer: string) {
        this.answer = this.question === answer;
        setTimeout(() => {
            this.answer = null;
        }, 2000)
    }
}
