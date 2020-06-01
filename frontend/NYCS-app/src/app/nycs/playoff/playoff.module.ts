import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { PlayoffComponent } from './components/playoff.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesMatchComponent } from './components/series/series-match/series-match.component';
import { TeamAreaColoredDirective } from './directives/team-area-colored.directive';
import { TeamAreaBorderBottomDirective } from './directives/team-area-border-bottom.directive';

const routes: Routes = [
  { path: '', component: PlayoffComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent,
    SeriesComponent,
    SeriesMatchComponent,
    TeamAreaColoredDirective,
    TeamAreaBorderBottomDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
