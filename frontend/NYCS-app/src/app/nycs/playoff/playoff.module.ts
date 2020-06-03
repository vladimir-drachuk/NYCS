import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from 'src/app/shared/shared.module';
import { PlayoffComponent } from './components/playoff.component';
import { SeriesDetailedComponent } from './components/series-detailed/series-detailed.component';
import { TeamAreaColoredDirective } from './directives/team-area-colored.directive';
import { TeamAreaBorderBottomDirective } from './directives/team-area-border-bottom.directive';
import { SeriesComponent } from './components/series/series.component';
import { WinnerSeriesFontStrongDirective } from './directives/winner-series-font-strong.directive';
import { SeriesDetailedMatchGroupComponent } from
  './components/series-detailed/series-detailed-match-group/series-detailed-match-group.component';
import { WinnerMatchFontStrongDirective } from './directives/winner-match-font-strong.directive';

const routes: Routes = [
  { path: '', component: PlayoffComponent },
  { path: ':seriesString', component: SeriesDetailedComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent,
    SeriesDetailedComponent,
    SeriesDetailedMatchGroupComponent,
    SeriesComponent,
    TeamAreaColoredDirective,
    TeamAreaBorderBottomDirective,
    WinnerSeriesFontStrongDirective,
    WinnerMatchFontStrongDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
