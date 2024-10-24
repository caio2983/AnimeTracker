import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
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

import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NgFor, NgbCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers: [NgbCarouselConfig],
})
export class SliderComponent {
  @Input({ required: true }) trendingData!: TrendingResponse;
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // Using ngAfterViewChecked to access DOM after the component views are initialized and checked for changes.
  ngAfterViewInit() {
    // const carouselInner =
    //   this.elementRef.nativeElement.querySelector('.carousel-item');
    // const carouselItem =
    //   this.elementRef.nativeElement.querySelector('.carousel-item');
    // if (carouselInner & carouselItem) {
    //   this.renderer.setStyle(carouselInner, 'display', 'flex');
    //   this.renderer.setStyle(carouselInner, 'flex-direction', 'flex');
    //   this.renderer.setStyle(carouselItem, 'display', 'block');
    //   this.renderer.setStyle(carouselItem, 'margin-right', '0');
    //   this.renderer.setStyle(carouselItem, 'flex', '0 0 calc(100%/3)');
    // } else {
    //   console.warn('carousel-inner não encontrado!');
    // }
  }

  constructor(
    config: NgbCarouselConfig,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
}
