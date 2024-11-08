import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() characterData!: any;
  isLoading: boolean = true;

  constructor() {}
}
