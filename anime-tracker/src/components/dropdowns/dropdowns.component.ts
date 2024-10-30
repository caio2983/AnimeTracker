import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Event } from '@angular/router';
import { availableGenres } from '../../app/data';
import { Genre } from '../../models/genre-models.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  @Output() public yearAlert = new EventEmitter();
  @Output() public genreAlert = new EventEmitter();
  @Output() public filtersAlert = new EventEmitter();

  availableGenres!: {
    name: string;
    slug: string;
  }[];
  selectedYear!: string | undefined;
  selectedGenre!: string | undefined;

  constructor() {
    this.availableGenres = availableGenres;
  }

  emitYear(year: string) {
    console.log('year', year);
    this.yearAlert.emit(year);
    this.selectedYear = year;
  }

  emitGenre(genre: string) {
    console.log('genre', genre);
    this.genreAlert.emit(genre);
    this.selectedGenre = genre;
  }

  emitFilters(genre?: string, year?: string) {
    console.log('genre', genre);
    this.filtersAlert.emit({
      genre: genre,
      year: year,
    });
  }
}
