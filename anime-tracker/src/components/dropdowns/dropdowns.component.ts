import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {
  @Output() public onAlert = new EventEmitter();
  emitYear(year: string) {
    console.log('year', year);
    this.onAlert.emit(year);
  }

  
}
