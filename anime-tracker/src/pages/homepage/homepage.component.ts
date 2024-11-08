import { Component, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Trending } from '../../services/trending.services';
import { Anime, TrendingResponse } from '../../models/trending-models.model';
import { SliderComponent } from '../../components/slider/slider.component';
import { Genres } from '../../services/genres.services';
import { Genre } from '../../models/genre-models.model';
import { byGenre } from '../../models/byGenre.model';
import { DropdownsComponent } from '../../components/dropdowns/dropdowns.component';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, RouterModule } from '@angular/router';
import { Animes } from '../../services/anime.services';
import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatCardModule } from '@angular/material/card';
import { NgbTooltipConfig, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent,
    SliderComponent,
    DropdownsComponent,
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule,
    NgbTooltipModule,
    MatCardModule,
    InfiniteScrollDirective,
    MatProgressSpinnerModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  trendingData!: TrendingResponse;
  dramaData!: byGenre;
  actionData!: byGenre;
  horrorData!: byGenre;
  sliceData!: byGenre;
  allGenres!: Genre[];

  animeData!: Anime[];

  genresSelected: string[] = [];
  yearSelected!: string | undefined;
  seasonSelected!: string | undefined;
  ratingSelected!: string | undefined;
  text!: string | undefined;

  parseFloat = parseFloat;

  noData: boolean = false;
  nextUrl!: string; // The last url that was searched by the service. Stored here to be reused in pagination
  isLoading: boolean = false;

  filters!: {
    genres: string[];
    year: string | undefined;
    link: string | undefined;
    season: string | undefined;
    rating: string | undefined;
    text: string | undefined;
  };

  constructor(
    private trending: Trending,
    private genres: Genres,
    private animes: Animes
  ) {}

  setFilters(filters: {
    genres: string[];
    year: string | undefined;
    link: string | undefined;
    season: string | undefined;
    rating: string | undefined;
    text: string | undefined;
  }) {
    this.filters = filters; // Armazena o objeto recebido

    this.yearSelected = filters.year;
    this.genresSelected = filters.genres;
    this.seasonSelected = filters.season;
    this.ratingSelected = filters.rating;
    this.text = filters.text;

    const result = this.animes.getAnimesByFilter(this.filters);

    result.response.subscribe((response) => {
      if (response.data.length == 0) {
        this.noData = true;
      } else {
        this.noData = false;
      }
      this.animeData = response.data;
      console.log('TESTE DATA', response);
      this.nextUrl = response.links.next;
      console.log(this.nextUrl);

      console.log(this.animeData);
    });
  }

  appendData = () => {
    this.isLoading = true;
    const result = this.animes.getNextPage(this.nextUrl);
    result.subscribe((response) => {
      console.log('TESTE APPEND', response);
      this.nextUrl = response.links.next;
      response.data.forEach((anime: any) => {
        this.animeData.push(anime);
        this.isLoading = false;
      });
      console.log('TESTE NEXT URL', this.nextUrl);
    });
  };
}
