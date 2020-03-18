import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';

import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/header/carousel/carousel.component';
import { MatchesListComponent } from './components/header/matches-list/matches-list.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MatchesListComponent,
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
