import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Store } from '@ngrx/store';

import { Match, defaultMatch } from '../../../../shared/models/match.model';
import * as matchesSelector from '../../../../redux/selectors/matches.selectors';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public name = 'Angular';
  public slideNo = 0;
  public withAnim = true;
  public resetAnim = true;
  public maxCount = 6;
  public carouselItems: Match[] = Array(this.maxCount + 1).fill(defaultMatch);

  @ViewChild('myCarousel') myCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: this.maxCount - 3, sm: this.maxCount - 2, md: this.maxCount - 1, lg: this.maxCount, all: 0 },
    slide: 1,
    interval: {timing: 4000, initialDelay: 1000},
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef, private store: Store) {
    this.store.select(matchesSelector.getAll).subscribe((matches: Match[]) => {
      matches.sort((a, b) => +b.isComplete - +a.isComplete)
      this.carouselItems = this.fillCarousel(matches);

      if (matches.length > this.maxCount) {
        this.cdr.detectChanges();
        this.moveTo(7);
      }
    });
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
