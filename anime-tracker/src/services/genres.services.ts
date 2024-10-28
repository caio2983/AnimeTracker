import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../models/genre-models.model';
import { Anime } from '../models/trending-models.model';

@Injectable({
  providedIn: 'root',
})
export class Genres {
  private genres = environment.genres;

  constructor(private httpClient: HttpClient) {}

  // Pega apenas os 5 primeiros gêneros para
  getAllGenres(): Observable<any> {
    // const genresHome = this.httpClient
    //   .get<Genre[]>(this.genres)
    //   .pipe(map((response: Genre[]) => response.slice(0, 5)));

    const allGenres = this.httpClient.get<Genre[]>(this.genres);

    return this.httpClient.get<Genre[]>(this.genres);
  }

  getAnimesByGenre(genre: string): Observable<any> {
    const url = `https://kitsu.io/api/edge/anime?filter[genres]=${genre}&page[limit]=20&page[offset]=0`;
    return this.httpClient.get<Genre[]>(url);
  }
}
