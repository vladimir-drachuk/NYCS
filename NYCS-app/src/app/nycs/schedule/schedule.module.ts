import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './components/schedule.component';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './components/match/match.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  declarations: [ScheduleComponent,
    MatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScheduleModule { }
