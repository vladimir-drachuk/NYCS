import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'regular', pathMatch: 'full' },
  { path: 'regular', loadChildren: () => import('./nycs/regular/regular.module')
      .then(modulE => modulE.RegularModule) },
  { path: 'playoff', loadChildren: () => import('./nycs/playoff/playoff.module')
      .then(modulE => modulE.PlayoffModule) },
  { path: ':id', loadChildren: () => import('./teams/teams.module')
      .then(modulE => modulE.TeamsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
