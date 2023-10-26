import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';
import { KanaService } from './services/kana.service';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            SymbolComponent
        ],
        providers: [
            KanaService
        ],
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
