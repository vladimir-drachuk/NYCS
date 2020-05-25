import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { ResultsComponent } from './components/results.component';

const routes: Routes = [
  { path: '', component: ResultsComponent }
]

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultsModule { }
