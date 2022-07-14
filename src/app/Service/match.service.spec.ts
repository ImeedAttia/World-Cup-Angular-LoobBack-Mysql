import { TestBed } from '@angular/core/testing';

import { MAtchService } from './match.service';

describe('MAtchService', () => {
  let service: MAtchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MAtchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
