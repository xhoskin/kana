import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';
import { CommonModule } from '@angular/common';
import { KanaService } from './services/kana.service';

@NgModule({
    declarations: [
        AppComponent,
        SymbolComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
    ],
    providers: [
        KanaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
