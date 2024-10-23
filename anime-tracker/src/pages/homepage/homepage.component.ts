import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Trending } from '../../services/trending.services';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private trending: Trending) {
    this.trending.getTrending().subscribe((response) => {
      console.log(response);
    });
  }
}
