import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RegularComponent } from './components/regular.component';
import { RegularTableComponent } from './components/regular-table/regular-table.component';
import { SortPipe } from './pipes/sort.pipe';
import { RulesComponent } from './components/rules/rules.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: RegularComponent }
];

@NgModule({
  declarations: [
    RegularComponent,
    RegularTableComponent,
    SortPipe,
    RulesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    RouterModule.forChild(routes)
  ]
})
export class RegularModule { }
