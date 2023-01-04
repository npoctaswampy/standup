import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TriviaReturn } from '../model/trivia.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {

  constructor(private http: HttpClient) { } 

  public getTrivia(): Observable<TriviaReturn> {
    return this.http.get<TriviaReturn>('https://opentdb.com/api.php?amount=1&difficulty=easy');
  }
}
