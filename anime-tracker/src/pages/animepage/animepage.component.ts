import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animes } from '../../services/anime.services';
import { Anime } from '../../models/trending-models.model';

@Component({
  selector: 'app-animepage',
  standalone: true,
  imports: [],
  templateUrl: './animepage.component.html',
  styleUrl: './animepage.component.scss',
})
export class AnimepageComponent {
  id!: string;
  animeData!: Anime;
  constructor(private route: ActivatedRoute, private anime: Animes) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.anime.getAnimes(this.id).subscribe((response) => {
      this.animeData = response.data;
      console.log('DADOSSSS', this.animeData);
    });
  }
}
