import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: 'record-time', loadChildren: () => import('./modules/record-time/record-time.module').then(m => m.RecordTimeModule) },
  { path: 'balance', loadChildren: () => import('./modules/balance/balance.module').then(m => m.BalanceModule) },
  { path: 'leave', loadChildren: () => import('./modules/leave/leave.module').then(m => m.LeaveModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
