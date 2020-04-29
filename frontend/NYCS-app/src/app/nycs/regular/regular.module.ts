import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { RegularComponent } from './components/regular.component';
import { RegularTableComponent } from './components/regular-table/regular-table.component';
import { SortPipe } from './pipes/sort.pipe';

const routes: Routes = [
  { path: '', component: RegularComponent }
];

@NgModule({
  declarations: [
    RegularComponent,
    RegularTableComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class RegularModule { }
