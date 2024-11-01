import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { availableGenres } from '../../app/data';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';

import { Renderer2 } from '@angular/core';

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

  @ViewChild('slider') sliderElement!: ElementRef;

  constructor(
    private primengConfig: PrimeNGConfig,
    private renderer: Renderer2
  ) {
    this.availableGenres = availableGenres;
  }

  ngAfterViewInit() {
    this.setGenre('comedy');
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
