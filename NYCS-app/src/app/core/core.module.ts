import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/header/carousel/carousel.component';
import { MatchesListComponent } from './components/header/matches-list/matches-list.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuService } from './services/menu.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    NguCarouselModule,
    RouterModule,
    MatButtonToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    MenuService
  ]
})
export class CoreModule { }
