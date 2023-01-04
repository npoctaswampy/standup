import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeApiService {

  constructor(private http: HttpClient) { } 

  public getMeme() {
    return this.http.get('https://meme-api.com/gimme');
  }
}
