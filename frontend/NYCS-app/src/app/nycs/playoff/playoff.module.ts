import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayoffComponent } from './components/playoff.component';

const routes: Routes = [
  { path: '', component: PlayoffComponent }
];

@NgModule({
  declarations: [
    PlayoffComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayoffModule { }
