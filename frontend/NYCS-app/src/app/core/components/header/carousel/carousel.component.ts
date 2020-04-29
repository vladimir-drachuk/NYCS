import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 5, lg: 5, all: 0 },
    slide: 1,
    interval: {timing: 4000, initialDelay: 1000},
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.moveTo(10)
  }

  // reset() {
  //   this.myCarousel.reset(!this.resetAnim);
  // }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, this.withAnim);
  }
}
