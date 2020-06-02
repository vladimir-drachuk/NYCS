import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { PlayoffComponent } from './components/playoff.component';
import { SeriesDetailedComponent } from './components/series-detailed/series-detailed.component';
import { SeriesDetailedMatchComponent } from './components/series-detailed/series-detailed-match/series-detailed-match.component';
import { TeamAreaColoredDirective } from './directives/team-area-colored.directive';
import { TeamAreaBorderBottomDirective } from './directives/team-area-border-bottom.directive';
import { SeriesComponent } from './components/series/series.component';
import { WinnerFontStrongDirective } from './directives/winner-font-strong.directive';

const routes: Routes = [
  { path: '', component: PlayoffComponent },
  { path: ':seriesString', component: SeriesDetailedComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent,
    SeriesDetailedComponent,
    SeriesDetailedMatchComponent,
    SeriesComponent,
    TeamAreaColoredDirective,
    TeamAreaBorderBottomDirective,
    WinnerFontStrongDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
