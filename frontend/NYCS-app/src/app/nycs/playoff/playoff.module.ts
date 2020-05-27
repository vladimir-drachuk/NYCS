import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayoffComponent } from './components/playoff.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path: '', component: PlayoffComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
