import { Component } from '@angular/core';
import { KanaService } from './services/kana.service';
import { Layout } from './types/layout.type';

@Component({
    selector: 'kana-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public question: string = '';
    public answer: boolean | null = null;
    public layout: Layout;
    public animateAnswer: boolean = false;
    public score: number = -1;
    public readonly WIN_SCORE = 30;

    constructor(
        public kana: KanaService,
    ) {
        this.layout = this.kana.layout;
        this.updateQuestion();
    }

    public updateQuestion() {
        this.question = this.kana.getRandomReading();
        this.score++;
        if (this.score === this.WIN_SCORE) {
            window.location.replace("https://www.youtube.com/watch?v=4DxeiPYwHAg");
        }
    }

    public checkAnswer(answer: string) {
        this.answer = this.question === answer;
        this.animateAnswer = false;
        setTimeout(() => { this.animateAnswer = true; }, 0);
        if (this.answer) {
            this.updateQuestion();
        } else {
            this.score = 0;
        }
    }
}
