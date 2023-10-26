import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolComponent } from './symbol.component';

describe('KanaSymbolComponent', () => {
  let component: SymbolComponent;
  let fixture: ComponentFixture<SymbolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymbolComponent]
    });
    fixture = TestBed.createComponent(SymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
