import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'standings', pathMatch: 'full' },
  { path: 'standings', loadChildren: () => import('./nycs/regular/regular.module')
      .then(modulE => modulE.RegularModule) },
  { path: 'playoff', loadChildren: () => import('./nycs/playoff/playoff.module')
      .then(modulE => modulE.PlayoffModule) },
  { path: 'schedule', loadChildren: () => import('./nycs/schedule/schedule.module')
      .then(modulE => modulE.ScheduleModule) },
  { path: 'results', loadChildren: () => import('./nycs/results/results.module')
      .then(modulE => modulE.ResultsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(modulE => modulE.AdminModule)},
  { path: 'error', component: Page404Component },
  { path: ':teamtag', loadChildren: () => import('./teams/teams.module')
      .then(modulE => modulE.TeamsModule) },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
