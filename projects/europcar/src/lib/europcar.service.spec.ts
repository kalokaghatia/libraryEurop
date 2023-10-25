import { TestBed } from '@angular/core/testing';

import { EuropcarService } from './europcar.service';

describe('EuropcarService', () => {
  let service: EuropcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuropcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
