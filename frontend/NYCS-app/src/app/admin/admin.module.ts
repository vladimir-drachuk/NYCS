import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { AdminPageComponent } from './components/admin-page.component';
import { EditScheduleComponent } from './components/edit-schedule/edit-schedule.component';
import { FromExcelComponent } from './components/edit-schedule/from-excel/from-excel.component';
import { AdminMatchComponent } from './components/admin-match/admin-match.component';
import { MatchFocusedDirective } from './directives/match-focused.directive';
import { InputValidateDirective } from './directives/input-validate.directive';
import { EditMatchComponent } from './components/edit-schedule/edit-match/edit-match.component';
import { AddMatchComponent } from './components/edit-schedule/add-match/add-match.component';

const routes: Routes = [
  { path: '', component: AdminPageComponent }
];

@NgModule({
  declarations: [
    AdminPageComponent, 
    EditScheduleComponent,
    FromExcelComponent,
    AdminMatchComponent,
    MatchFocusedDirective,
    InputValidateDirective,
    EditMatchComponent,
    AddMatchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
