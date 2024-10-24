import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Trending } from '../../services/trending.services';
import { TrendingResponse } from '../../models/trending-models.model';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  trendingData!: TrendingResponse;

  constructor(private trending: Trending) {
    this.trending.getTrending().subscribe((response) => {
      this.trendingData = response;
      console.log('DADOSSSS', this.trendingData);
    });
  }
}
