import { CommonModule } from '@angular/common';
import { Component, Input, AfterContentInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() characterData!: any;

  constructor() {}

  ngAfterContentInit() {
    console.log(this.characterData);
  }
}
