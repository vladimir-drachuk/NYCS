import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';

import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/header/carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
