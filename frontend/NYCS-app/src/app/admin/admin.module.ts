import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminPageComponent } from './components/admin-page.component';
import { EditRegularMatchesComponent } from './components/edit-regular-matches/edit-regular-matches.component';
import { FromExcelComponent } from './components/edit-regular-matches/from-excel/from-excel.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';

const routes: Routes = [
  { path: '', component: AdminPageComponent }
];

@NgModule({
  declarations: [
    AdminPageComponent, 
    EditRegularMatchesComponent,
    FromExcelComponent,
    AdminMatchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
