import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { Anime, TrendingResponse } from '../../models/trending-models.model';
import { CommonModule, NgFor } from '@angular/common';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { AfterViewChecked } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { byGenre } from '../../models/byGenre.model';
import { RouterModule } from '@angular/router';

interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgbCarouselModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    RouterModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers: [],
})
export class SliderComponent {
  @Input({ required: false }) trendingData!: TrendingResponse;
  @Input({ required: true }) animeData!: byGenre;
  @ViewChild('carouselInner')
  carouselInner!: ElementRef;

  responsiveOptions: any[] | undefined;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.animeData);
  }

  constructor(
    config: NgbCarouselConfig,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
}
