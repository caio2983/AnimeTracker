import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Animes } from '../../services/anime.services';
import { Anime } from '../../models/trending-models.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-animepage',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    CommonModule,
    MatButton,
    CharacterCardComponent,
  ],
  templateUrl: './animepage.component.html',
  styleUrl: './animepage.component.scss',
})
export class AnimepageComponent {
  id!: string;
  animeData!: Anime;
  relationshipsData!: any;
  parseFloat = parseFloat;

  constructor(private route: ActivatedRoute, private anime: Animes) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.anime.getAnimes(this.id).subscribe((response) => {
      this.animeData = response.data;
      console.log('DADOSSSS', this.animeData);
    });
  }

  ngAfterContentInit(): void {
    this.anime.getAnimeRelationships(this.id).subscribe((response) => {
      this.relationshipsData = response;
      console.log('DADOS RELATIONSHIP', this.relationshipsData);
    });
  }
}
