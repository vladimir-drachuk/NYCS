import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegularComponent } from './components/regular.component';

const routes: Routes = [
  { path: '', component: RegularComponent }
];

@NgModule({
  declarations: [
    RegularComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegularModule { }
