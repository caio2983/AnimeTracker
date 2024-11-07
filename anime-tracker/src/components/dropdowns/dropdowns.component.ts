import {
  Component,
  AfterViewInit,
  AfterContentInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { availableGenres } from '../../app/data';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Renderer2 } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [
    NgbDropdownModule,
    CommonModule,
    CapitalizePipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  @Output() public yearAlert = new EventEmitter();
  @Output() public genreAlert = new EventEmitter();
  @Output() filtersAlert = new EventEmitter<{
    genres: string[];
    year: string | undefined;
    season: string | undefined;
    rating: string | undefined;
    link: string | undefined;
    text: string | undefined;
  }>();

  @Output() public goHome = new EventEmitter();

  availableGenres!: {
    name: string;
    slug: string;
  }[];
  selectedYear: string | undefined = undefined;
  selectedGenre: string | undefined = undefined;
  selectedSeason: string | undefined = undefined;
  selectedRating: string | undefined = undefined;
  search: string | undefined = undefined;

  selectedGenres: string[] = [];

  years: number[] = Array.from({ length: 2024 - 1990 + 1 }, (_, i) => 2024 - i);
  seasons: string[] = ['spring', 'summer', 'fall', 'winter'];
  ratings: string[] = ['G', 'PG', 'R', 'R18'];

  @ViewChild('slider') sliderElement!: ElementRef;

  constructor(
    private primengConfig: PrimeNGConfig,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.availableGenres = availableGenres;
  }

  ngAfterViewInit() {}

  ngAfterContentInit() {
    this.setGenre('action');
    this.setGenre('drama');
    this.setGenre('cars');
    this.setGenre('police');
    this.searchAnimes();
  }

  setGenre(genre: string) {
    if (genre === '') {
      this.selectedGenres = [];
    } else if (!this.selectedGenres.includes(genre)) {
      this.selectedGenres.push(genre);
    }

    console.log(this.selectedGenres);
    this.emitFilters();
  }

  setYear(year?: string | undefined) {
    this.selectedYear = year;
    this.emitFilters();
  }

  setSeason(season: string | undefined) {
    this.selectedSeason = season;
    this.emitFilters();
  }

  setRating(rating: string | undefined) {
    this.selectedRating = rating;
    this.emitFilters();
  }

  emitFilters() {
    const response = {
      genres: this.selectedGenres,
      year: this.selectedYear,
      season: this.selectedSeason,
      rating: this.selectedRating,
      text: this.search,
      link: undefined,
    };
    this.filtersAlert.emit(response);
    console.log(response);
  }

  searchAnimes() {
    this.emitFilters();
  }

  resetFilters() {
    this.selectedYear = undefined;
    this.selectedGenres = [];
    this.selectedSeason = undefined;
    this.selectedRating = undefined;
    this.search = undefined;

    this.emitFilters();
  }

  removeGenre(genre: string): void {
    const index = this.selectedGenres.indexOf(genre);

    this.selectedGenres.splice(index, 1);

    this.emitFilters();
  }

  removeFilter(filter: string): void {
    if (filter == 'year') {
      this.selectedYear = undefined;
    } else if (filter == 'season') {
      this.selectedSeason = undefined;
    } else if (filter == 'rating') {
      this.selectedRating = undefined;
    }
  }
}
