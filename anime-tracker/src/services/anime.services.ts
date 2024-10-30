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

  getAnimesByFilter(
    year?: string,
    genre?: string,
    link?: string
  ): { url: string; response: Observable<any> } {
    let url = '';
    if (link == undefined) {
      url = `https://kitsu.io/api/edge/anime`;
    } else {
      url = link;
    }

    let selectedYear = '';
    const filters: string[] = [];

    console.log('TESTE FILTERS', filters);

    if (year != undefined) {
      // filters[0] = `filter[seasonYear]=${year}`;
      url += `?filter[seasonYear]=${year}`;
    }

    if (genre != undefined) {
      filters.push(`filter[genres]=${genre}`);
    }

    if (filters.length) {
      if (year != undefined) {
        url += `&${filters.join('&')}`;
      } else {
        url += `?${filters.join('&')}`;
      }
    }

    console.log('URL TESTE', url);

    return {
      url,
      response: this.httpClient.get<Anime[]>(url),
    };
  }
}
