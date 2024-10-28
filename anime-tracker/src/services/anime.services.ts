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
export class Animes {
  constructor(private httpClient: HttpClient) {}

  getAnimes(id: string): Observable<any> {
    const url = `https://kitsu.io/api/edge/anime/${id}`;
    return this.httpClient.get<Anime>(url);
  }

  searchAnimes(search: string): Observable<any> {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${search}`;
    return this.httpClient.get<Anime[]>(url);
  }
}
