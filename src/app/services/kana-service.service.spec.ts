import { TestBed } from '@angular/core/testing';

import { KanaService } from './kana.service';

describe('KanaServiceService', () => {
  let service: KanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
