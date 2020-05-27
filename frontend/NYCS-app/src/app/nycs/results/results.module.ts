import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { ResultsComponent } from './components/results.component';
import { PlaceSlotComponent } from './components/place-slot/place-slot.component';
import { SortslotsPipe } from './pipes/sortslots.pipe';

const routes: Routes = [
  { path: '', component: ResultsComponent }
]

@NgModule({
  declarations: [ResultsComponent, PlaceSlotComponent, SortslotsPipe],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultsModule { }
