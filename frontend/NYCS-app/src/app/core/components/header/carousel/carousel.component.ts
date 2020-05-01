import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

import { DbService } from '../../../../shared/services/db.service';
import { Match, defaultMatch } from '../../../../shared/models/match.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  public name = 'Angular';
  public slideNo = 0;
  public withAnim = true;
  public resetAnim = true;
  public maxCount = 6;
  public carouselItems: Match[] = Array(this.maxCount + 1).fill(defaultMatch);

  @ViewChild('myCarousel') myCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 4, md: 5, lg: this.maxCount, all: 0 },
    slide: 1,
    interval: {timing: 4000, initialDelay: 1000},
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef, private db: DbService) {
    this.db.matches.subscribe((matches: Match[]) => {
      matches.sort((a, b) => +b.isComplete - +a.isComplete)
      this.carouselItems = this.fillCarousel(matches);
    });
  }

  public ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.moveTo(10)
  }

  private fillCarousel(matches: Match[]): Match[] {
    const filler = [...matches];
    if (filler.length < this.maxCount) {
      while (filler.length !== this.maxCount + 1) {
        filler.push(defaultMatch);
      }
    }
    return filler;
  }

  public moveTo(slide): void {
    this.myCarousel.moveTo(slide, this.withAnim);
  }

    // reset() {
  //   this.myCarousel.reset(!this.resetAnim);
  // }
}
