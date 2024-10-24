import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrendingResponse } from '../models/trending-models.model';

@Injectable({
  providedIn: 'root',
})
export class Trending {
  private trending = environment.trending;

  constructor(private httpClient: HttpClient) {}

  getTrending(): Observable<TrendingResponse> {
    return this.httpClient.get<TrendingResponse>(this.trending);
  }
}
