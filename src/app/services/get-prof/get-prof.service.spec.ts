import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GetProfService } from './get-prof.service';

describe('GetProfService', () => {
  let service: GetProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpHandler, HttpClient]
    });
    service = TestBed.inject(GetProfService);
  });

  it('should create', ()=>{
    expect(service).toBeTruthy()
  })
  
});
