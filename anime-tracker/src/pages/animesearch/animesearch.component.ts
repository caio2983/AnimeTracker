import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Animes } from '../../services/anime.services';
import { Anime } from '../../models/anime-models.model';
import { NgFor, NgStyle } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-animesearch',
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle, CardModule],
  templateUrl: './animesearch.component.html',
  styleUrl: './animesearch.component.scss',
})
export class AnimesearchComponent {
  searchQuery!: string;
  animeData!: Anime[];

  constructor(private route: ActivatedRoute, private anime: Animes) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     this.searchQuery = params['search'];
  //     console.log('TESTE', this.searchQuery);
  //   });

  //   if (this.searchQuery) {
  //     this.anime.searchAnimes(this.searchQuery).subscribe((response) => {
  //       console.log(response);
  //       this.animeData = response.data;
  //     });
  //   }
  // }
}
