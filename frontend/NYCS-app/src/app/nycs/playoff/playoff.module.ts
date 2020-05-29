import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayoffComponent } from './components/playoff.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesMatchComponent } from './components/series/series-match/series-match.component';

const routes: Routes = [
  { path: '', component: PlayoffComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent,
    SeriesComponent,
    SeriesMatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
