import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  @Output() public yearAlert = new EventEmitter();
  @Output() public genreAlert = new EventEmitter();

  selectedYear!: string;
  selectedGenre!: string;

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
}