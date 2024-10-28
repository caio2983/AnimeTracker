import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Trending } from '../../services/trending.services';
import { Anime, TrendingResponse } from '../../models/trending-models.model';
import { SliderComponent } from '../../components/slider/slider.component';
import { Genres } from '../../services/genres.services';
import { Genre } from '../../models/genre-models.model';
import { byGenre } from '../../models/byGenre.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  trendingData!: TrendingResponse;
  dramaData!: byGenre;
  actionData!: byGenre;
  horrorData!: byGenre;
  sliceData!: byGenre;
  allGenres!: Genre[];

  constructor(private trending: Trending, private genres: Genres) {
    //Get trending anime for slide
    this.trending.getTrending().subscribe((response) => {
      this.trendingData = response;
      console.log('DADOSSSS', this.trendingData);
    });

    this.genres.getAnimesByGenre('drama').subscribe((response) => {
      this.dramaData = response;
      console.log('DADOS DRAMAaaaaaaa', this.dramaData);
    });

    this.genres.getAnimesByGenre('action').subscribe((response) => {
      this.actionData = response;
      console.log('DADOS DRAMAaaaaaaa', this.actionData);
    });

    this.genres.getAnimesByGenre('horror').subscribe((response) => {
      this.horrorData = response;
      console.log('DADOS DRAMAaaaaaaa', this.horrorData);
    });

    this.genres.getAnimesByGenre('slice-of-life').subscribe((response) => {
      this.sliceData = response;
      console.log('DADOS DRAMAaaaaaaa', this.sliceData);
    });

    this.genres.getAllGenres().subscribe((response) => {
      console.log('DADOS GENRESSS', response);
    });
  }
}
