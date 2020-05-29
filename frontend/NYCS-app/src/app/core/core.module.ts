import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/header/carousel/carousel.component';
import { MatchesListComponent } from './components/header/matches-list/matches-list.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuService } from './services/menu.service';
import { TeamsComponent } from './components/header/nav-menu/teams/teams.component';
import { Page404Component } from './components/page404/page404.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MatchesListComponent,
    NavMenuComponent,
    FooterComponent,
    TeamsComponent,
    Page404Component,
    LoadSpinnerComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  exports: [
    LoadSpinnerComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
  ],
  providers: [
    MenuService
  ]
})
export class CoreModule { }
