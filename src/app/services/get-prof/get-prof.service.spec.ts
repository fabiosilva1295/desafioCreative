import { TestBed } from '@angular/core/testing';

import { GetProfService } from './get-prof.service';

describe('GetProfService', () => {
  let service: GetProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
