import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { TrendingResponse } from '../../models/trending-models.model';
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
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers: [],
})
export class SliderComponent {
  @Input({ required: true }) trendingData!: TrendingResponse;
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  responsiveOptions: any[] | undefined;

  cars: Car[] = [];

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {
    this.cars = [
      {
        id: '1',
        name: 'Bugatti',
        description: 'Racing car',
        price: 800,
      },
      {
        id: '2',
        name: 'Ferrari',
        description: 'The Prancing Horse',
        price: 1500,
      },
      {
        id: '3',
        name: 'Porsche',
        description: 'Full spectrum',
        price: 10000,
      },
      {
        id: '1',
        name: 'Bugatti',
        description: 'Racing car',
        price: 800,
      },
      {
        id: '2',
        name: 'Ferrari',
        description: 'The Prancing Horse',
        price: 1500,
      },
      {
        id: '3',
        name: 'Porsche',
        description: 'Full spectrum',
        price: 10000,
      },
      {
        id: '1',
        name: 'Bugatti',
        description: 'Racing car',
        price: 800,
      },
      {
        id: '2',
        name: 'Ferrari',
        description: 'The Prancing Horse',
        price: 1500,
      },
      {
        id: '3',
        name: 'Porsche',
        description: 'Full spectrum',
        price: 10000,
      },
    ];
  }

  constructor(
    config: NgbCarouselConfig,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
}
