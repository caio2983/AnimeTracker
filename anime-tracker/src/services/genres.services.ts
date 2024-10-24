import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../models/genre-models.model';

@Injectable({
  providedIn: 'root',
})
export class Genres {
  private genres = environment.genres;

  constructor(private httpClient: HttpClient) {}

  // Pega apenas os 5 primeiros gêneros para
  getGenresHome(): Observable<Genre[]> {
    return this.httpClient
      .get<Genre[]>(this.genres)
      .pipe(map((response: Genre[]) => response.slice(0, 5)));
  }
}
