import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { availableGenres } from '../../app/data';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, CapitalizePipe],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  @Output() public yearAlert = new EventEmitter();
  @Output() public genreAlert = new EventEmitter();
  @Output() filtersAlert = new EventEmitter<{
    genre: string | undefined;
    year: string | undefined;
    season: string | undefined;
    link: string | undefined;
  }>();

  availableGenres!: {
    name: string;
    slug: string;
  }[];
  selectedYear: string | undefined = undefined;
  selectedGenre: string | undefined = undefined;
  selectedSeason: string | undefined = undefined;

  constructor() {
    this.availableGenres = availableGenres;
  }

  setGenre(genre: string | undefined) {
    this.selectedGenre = genre;
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

  emitFilters() {
    const response = {
      genre: this.selectedGenre,
      year: this.selectedYear,
      season: this.selectedSeason,
      link: undefined,
    };
    this.filtersAlert.emit(response);
  }
}
