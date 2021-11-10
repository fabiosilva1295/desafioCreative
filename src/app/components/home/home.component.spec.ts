import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetProfService } from 'src/app/services/get-prof/get-prof.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[HttpHandler, HttpClient]
    })
    .compileComponents();

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 


});
