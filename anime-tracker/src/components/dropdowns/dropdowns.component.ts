import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { availableGenres } from '../../app/data';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, CapitalizePipe, FormsModule],
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

  @ViewChild('slider') sliderElement!: ElementRef;

  constructor(
    private primengConfig: PrimeNGConfig,
    private renderer: Renderer2,
    private router: Router
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

  setRating(rating: string | undefined) {
    this.selectedRating = rating;
    this.emitFilters();
  }

  setHome(): void {
    this.goHome.emit('home');
    this.selectedGenre = undefined;
    this.selectedSeason = undefined;
    this.selectedYear = undefined;
  }

  emitFilters() {
    const response = {
      genre: this.selectedGenre,
      year: this.selectedYear,
      season: this.selectedSeason,
      rating: this.selectedRating,
      text: this.search,
      link: undefined,
    };
    this.filtersAlert.emit(response);
  }

  searchAnimes() {
    console.log('teste');
    this.emitFilters;
  }
}
