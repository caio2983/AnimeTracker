import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Trending {
  private trending = environment.trending;

  constructor(private httpClient: HttpClient) {}

  getTrending(): Observable<any> {
    return this.httpClient.get(this.trending);
  }
}
