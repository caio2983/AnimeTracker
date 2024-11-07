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

  getAnimeRelationships(id: string) {
    const url = `${environment.relationships}?id=${encodeURIComponent(id)}`;
    return this.httpClient.get<Anime[]>(url);
  }

  getNextPage(url: string) {
    return this.httpClient.get<any>(url);
  }

  getAnimesByFilter(filters: {
    genres: string[];
    year: string | undefined;
    link: string | undefined;
    season: string | undefined;
    rating: string | undefined;
    text: string | undefined;
  }): { url: string; response: Observable<any> } {
    let url = '';
    if (filters.link == undefined) {
      url = `https://kitsu.io/api/edge/anime?page[limit]=12`;
    } else {
      url = filters.link;
    }

    const filterss: string[] = [];

    console.log('TESTE FILTERS AAAAAAAAAAAAAAAA', filters);

    if (filters.year != undefined) {
      // filters[0] = `filter[seasonYear]=${year}`;
      url += `?filter[seasonYear]=${filters.year}`;
    }

    if (filters.genres.length != 0) {
      filterss.push(`filter[genres]=${filters.genres}`);
    }

    if (filters.season != undefined) {
      filterss.push(`filter[season]=${filters.season}`);
    }

    if (filters.rating != undefined) {
      filterss.push(`filter[ageRating]=${filters.rating}`);
    }

    if (filters.text != undefined) {
      filterss.push(`filter[text]=${filters.text}`);
    }

    if (filterss.length) {
      url += `&${filterss.join('&')}`;
    }

    console.log('TESTE YEARS', url);

    return {
      url,
      response: this.httpClient.get<Anime[]>(url),
    };
  }
}
