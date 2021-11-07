import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';

@Injectable({
  providedIn: 'root'
})
export class GetProfService {
  public url = 'http://localhost:3000/prof'

  constructor(private http: HttpClient) { }

  getProf(): Observable<Professor> {
    return this.http.get<Professor>(this.url)
  }
}
